const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginSchema = Schema({
  email: String,
  password: String,
});

const registerSchema = Schema({
  email: String,
  password: String,
});

const tokengeneratorSchema = Schema({

});

const resetPasswordRouter = Schema({

});


const Login = mongoose.model("Login", loginSchema);
const Register = mongoose.model("Register", registerSchema);
const TokenGenerator = mongoose.model("TokenGenerator", tokengeneratorSchema);
const ResetPassword = mongoose.model("ResetPassword", resetPasswordRouter);

module.exports = { Login , Register , TokenGenerator , ResetPassword };
