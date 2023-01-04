const jwt = require("jsonwebtoken");

const checkUserLoggedIn = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return next();
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).json({
        status: false,
        statusCode: 403,
        message: "User Token is expired / Invalid token",
      });
      if (!decoded.userId || !decoded.email)
      return res.status(403).json({
        status: false,
        statusCode: 403,
        message: "Token there but Invalid token user id not found",
      }); //invalid token
      req.users = {userId:decoded.userId, emaill : decoded.email}
      next()


  });

};
module.exports = checkUserLoggedIn
