const express = require("express");
const routes = express();
routes.use(express.json());

const DashboardController = require("../controllers/DashboardController");
const UserController = require("../controllers/UserController");

const { JWTValidation } = require("../middlewares/AuthMiddleware");

routes.get("/dashboard", JWTValidation, DashboardController.dashboard);
routes.get("/jobs", JWTValidation, DashboardController.jobs);
routes.get("/docs", JWTValidation, DashboardController.docs);
routes.get("/tools", JWTValidation, DashboardController.tools);

routes.post("/create/dashboard", JWTValidation, DashboardController.createDash);
routes.post("/create/jobs", JWTValidation, DashboardController.createJobs);
routes.post("/create/docs", JWTValidation, DashboardController.createDocs);
routes.post("/create/tools", JWTValidation, DashboardController.createTools);

routes.put("/dashboard/:id", JWTValidation, DashboardController.updateDash);
routes.put("/jobs/:id", JWTValidation, DashboardController.updateJobs);
routes.put("/docs/:id", JWTValidation, DashboardController.updateDocs);
routes.put("/tools/:id", JWTValidation, DashboardController.updateTools);

routes.delete("/dashboard/:id", JWTValidation, DashboardController.deleteDash);
routes.delete("/jobs/:id", JWTValidation, DashboardController.deleteJobs);
routes.delete("/docs/:id", JWTValidation, DashboardController.deleteDocs);
routes.delete("/tools/:id", JWTValidation, DashboardController.deleteTools);

routes.post("/user/register", UserController.create);
routes.post("/user/login", UserController.login);

routes.get("/user/logout", UserController.logout);
routes.get("/validate-login", JWTValidation, (req, res) =>
  res.status(200).send(true)
);

module.exports = routes;
