const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  demo: {
    type: String,
    required: true,
  },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
