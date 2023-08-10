// const express = require("express");
// const tokengeneratorRouter = express.Router();
// const { Login , TokenGenerator } = require("../models/todo");
// const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");

// let testAccount = nodemailer.createTestAccount();

// const app = express();
// app.use(express.json());

// tokengeneratorRouter.post("/generateToken", (req, res) => {
//   try {
//     let token = jwt.sign({ email: req.body.email }, "RESET-PASSWORD", {
//       expiresIn: "1h",
//     });

//     Login.findOneAndUpdate({email: req.body.email} , {token: token})

//     const html = `localhost:5173/auth/resetPassword/${token}`
    
//     let transporter = nodemailer.createTransport({
//       service:"gmail",
//       auth: {
//         user: "skype@devtechnosys.com", 
//         pass: "fbnthfdpynzcnhxl", 
//       },
//     });
    
//     let info = transporter.sendMail({
//       from: 'skype@devtechnosys.com', 
//       to: "haceli@abyssmail.com", 
//       subject: "ResetPassword ✔", 
//       text: "Hello world?",
//       html: `<a href=${html}> Click Here </a>`, 
//     });
    
    
    
//     console.log(jwt.verify(token, "RESET-PASSWORD"));
//     res.send(token);
//   } catch (error) {
//     res.status(400).json({ message: "Invalid Email" + error });
//   }
// });


// // skype@devtechnosys.com
// // fbnthfdpynzcnhxl

// module.exports = tokengeneratorRouter;
