const jwt = require('jsonwebtoken');
const sendToken = (user, statusCode, res) => {
  // Create JWT token
  const token = (user) => jwt.sign(user, process.env.COOKIE_EXPIRE, { expiresIn: process.env.JWT_EXPIRE });
  res.status(statusCode).cookie("token", token).json({
    success: true,
    user,
    token,
  });
};


// Create Token and saving in cookie

// const sendToken = (user, statusCode, res) => {
//     // Create JWT token

//     const token = user.getJWTToken();

//     // options for cookie
//     const options = {
//       expires: new Date(
//         Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//       ),
      
//       httpOnly: true,
//     };
//     res.status(statusCode).cookie("token", token).json({
//       success: true,
//       user,
//       token,
//     });
//   };
  module.exports = sendToken;
