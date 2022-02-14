const express = require("express");
const routes = express();
routes.use(express.json());
const auth = require('../middlewares/auth');

const UserController = require("../controllers/UserController");

routes.post("/user/register", UserController.create);
routes.post("/user/login", auth, UserController.login);

module.exports = routes;
