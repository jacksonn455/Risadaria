const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

module.exports = {
  async create(req, res) {
    const { username, password: unhashedPassword } = req.body;
    const password = await bcrypt.hash(unhashedPassword, 10);

    try {
      if (!username || typeof username !== "string") {
        return res.json({ error: "Usuário inválido." });
      }

      if (!unhashedPassword || typeof unhashedPassword !== "string") {
        return res.json({ error: "Senha inválida." });
      }

      if (unhashedPassword.length < 5) {
        return res.json({
          error: "Senha muito pequena. Deve ter no mínimo 6 caracteres",
        });
      }

      const user = await User.create({
        username,
        password,
      });

      res.status(200).json({ message: "Usuário criado com sucesso!" });
    } catch (err) {
      if (err.code === 11000) {
        return res.status(400).json({ error: "Usuário já existe." });
      }
      return res.status(500).json({ error: err.message });
    }
  },

  async login(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).lean();

    if (!user) {
      return res.status(400).json({ error: "Usuário ou senha inválidos." });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET
      );

      res.cookie("jwt", token, {
        sameSite: "strict",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
        // secure: true
      });

      return res.status(200).json({ token });
    }

    res.status(400).json({ error: "Usuário ou senha inválidos." });
  },

  async logout(req, res) {
    const token = req.cookies.jwt;
    if (token) {
      return res
        .status(200)
        .clearCookie("jwt")
        .json({ message: "Logout efetuado com sucesso." });
    }
    return res.status(500).json({ error: "Erro desconhecido." });
  },
};
