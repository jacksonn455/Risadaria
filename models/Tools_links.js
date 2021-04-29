const mongoose = require("mongoose");

const tools_link = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("tools_link", tools_link);
