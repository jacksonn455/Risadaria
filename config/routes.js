const express = require("express");
const routes = express();
routes.use(express.json());
const auth = require('../middlewares/auth');
const path = require('path')

routes.set("view engine", "ejs");
routes.set('views', path.join(__dirname, '../views'));
routes.use(express.static(path.join('C:/Users/jacks/Triider/public')));

const UserController = require("../controllers/UserController");
const NovaPiadaController = require("../controllers/NovaPiadaController");

routes.get("/", async ({res}) => {
    res.render("index");
  });

  routes.get("/register", async ({res}) => {
    res.render("registro");
  });

  routes.get("/home", async ({res}) => {
    res.render("home");
  });

  routes.get("/novapiada", async ({res}) => {
    res.render("nova-piada");
  });

routes.post("/user/register", UserController.create);
routes.post("/user/login", auth, UserController.login);
routes.post("/jokes/create", NovaPiadaController.create);

module.exports = routes;
