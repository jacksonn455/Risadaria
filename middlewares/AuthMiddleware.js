const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
  async JWTValidation(req, res, next) {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({
        error:
          "Você não tem autorização para acessar essa página. Tente logar novamente",
      });
    }

    try {
      const jwt_user = jwt.verify(token, process.env.JWT_SECRET);

      await User.findOne({ _id: jwt_user._id });
    } catch (err) {
      res.clearCookie(jwt);
      return res.status(401).json({
        error:
          "Você não tem autorização para acessar essa página. Tente logar novamente",
      });
    }
    next();
  },
};
