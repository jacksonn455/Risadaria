const mongoose = require("mongoose");

const dashboard_links = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  links: {
    dashboard_link: {
      type: String,
      require: true,
    },
    iframe_link: {
      type: String,
      require: true,
    },
  },
});

module.exports = mongoose.model("dashboard_links", dashboard_links);
