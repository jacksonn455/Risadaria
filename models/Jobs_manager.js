const mongoose = require("mongoose");

const jobs_manager = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("jobs_manager", jobs_manager);
