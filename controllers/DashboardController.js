const Jobs_manager = require("../models/Jobs_manager");
const Docs_links = require("../models/Docs_links");
const Tools_links = require("../models/Tools_links");
const Dashboard_links = require("../models/Dashboard_links");

module.exports = {
  async dashboard(req, res) {
    try {
      const dashboard_links = await Dashboard_links.find();
      return res.status(200).json({ dashboard_links });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async jobs(req, res) {
    try {
      const jobs_manager = await Jobs_manager.find();
      return res.status(200).json({ jobs_manager });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async docs(req, res) {
    try {
      const docs_links = await Docs_links.find();
      return res.status(200).json({ docs_links });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async tools(req, res) {
    try {
      const tools_links = await Tools_links.find();
      return res.status(200).json({ tools_links });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async createDash(req, res) {
    const dashboard_links = Dashboard_links.create(req.body, (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Error: dashboard_links não foi cadastrado",
        });

      return res.status(200).json({
        error: false,
        message: "dashboard_links foi cadastrado com sucesso",
      });
    });
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async createJobs(req, res) {
    const jobs_manager = Jobs_manager.create(req.body, (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Error: jobs_manager não foi cadastrado",
        });
      return res.status(200).json({
        error: false,
        message: "jobs_manager foi cadastrado com sucesso",
      });
    });
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async createDocs(req, res) {
    const docs_links = Docs_links.create(req.body, (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Error: docs_links não foi cadastrado",
        });
      return res.status(200).json({
        error: false,
        message: "docs_links foi cadastrado com sucesso",
      });
    });
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async createTools(req, res) {
    const tools_links = Tools_links.create(req.body, (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Error: tools_links não foi cadastrado",
        });
      return res.status(200).json({
        error: false,
        message: "tools_links foi cadastrado com sucesso",
      });
    });
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async updateDash(req, res) {
    const dashboard_links = Dashboard_links.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err, emp) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: true,
            message: "Error: dashboard_links não foi alterado",
          });
        }

        return res.status(200).json({
          error: false,
          message: "dashboard_links foi alterado com sucesso",
        });
      }
    );
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async updateJobs(req, res) {
    const jobs_manager = Jobs_manager.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err, emp) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: true,
            message: "Error: jobs_manager não foi alterado",
          });
        }

        return res.status(200).json({
          error: false,
          message: "jobs_manager foi alterado com sucesso",
        });
      }
    );
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async updateDocs(req, res) {
    const docs_links = Docs_links.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err, emp) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: true,
            message: "Error: docs_links não foi alterado",
          });
        }

        return res.status(200).json({
          error: false,
          message: "docs_links foi alterado com sucesso",
        });
      }
    );
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async updateTools(req, res) {
    const tools_links = Tools_links.updateOne({ _id: req.params.id }, (err) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: true,
          message: "Error: tools_links não foi alterado",
        });
      }

      return res.status(200).json({
        error: false,
        message: "tools_links foi alterado com sucesso",
      });
    });
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async deleteDash(req, res) {
    const dashboard_links = Dashboard_links.deleteOne(
      { _id: req.params.id },
      (err) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: true,
            message: "Error: dashboard_links não foi deletado",
          });
        }

        return res.status(200).json({
          error: false,
          message: "dashboard_links foi deletado com sucesso",
        });
      }
    );
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async deleteJobs(req, res) {
    const jobs_manager = Jobs_manager.deleteOne(
      { _id: req.params.id },
      (err) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: true,
            message: "Error: Jobs não foi deletado",
          });
        }

        return res.status(200).json({
          error: false,
          message: "Jobs foi deletado com sucesso",
        });
      }
    );
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async deleteDocs(req, res) {
    const docs_links = Docs_links.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: true,
          message: "Error: docs_links não foi deletado",
        });
      }

      return res.status(200).json({
        error: false,
        message: "docs_links foi deletado com sucesso",
      });
    });
    return res.status(400).json({ error: "Autenticação falhou" });
  },

  async deleteTools(req, res) {
    const tools_links = Tools_links.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: true,
          message: "Error: tools_links não foi deletado",
        });
      }

      return res.status(200).json({
        error: false,
        message: "tools_links foi deletado com sucesso",
      });
    });
    return res.status(400).json({ error: "Autenticação falhou" });
  },
};
