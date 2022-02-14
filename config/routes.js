const express = require("express");
const routes = express();
routes.use(express.json());
const auth = require('../middlewares/auth');

const UserController = require("../controllers/UserController");
const NovaPiadaController = require("../controllers/NovaPiadaController");

routes.post("/user/register", UserController.create);
routes.post("/user/login", auth, UserController.login);
routes.post("/jokes/create", NovaPiadaController.create);

module.exports = routes;
