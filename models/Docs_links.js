const mongoose = require("mongoose");

const docs_link = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("docs_link", docs_link);
