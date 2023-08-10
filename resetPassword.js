const express = require("express");
const resetPasswordRouter = express.Router();
const {Login, ResetPassword } = require("../models/todo");

resetPasswordRouter.route("/resetPassword")
.post(async function (req, res){
    const {email, password, confirmPassword} = req.body;

    if(!email || !password || !confirmPassword){
        res.status(400).json({message: "Fields are missing..."})
    }

    if(password !== confirmPassword){
        res.status(400).json({message: "Password do not match."})
    }

    let d = await Login.findOne({ email }).then((user) => {
        if (!user) {
            res.status(400).json({message: "Email Address does not exist."});
        }
        Login.findOneAndUpdate({password: user.password},{password: req.body.password})
    }).then(() => {
        res.json({message: "Password Reset Successful.."})
    }).catch(err =>{
        res.status(400).json(err.message);
    });
});


module.exports = resetPasswordRouter;