const fs = require("fs");

exports.homeController = (req, res) => {
  const title = "Home Page";
  res.render("pages/home", { title });
};

exports.aboutController = (req, res) => {
  const title = "About Page";
  res.render("pages/about", { title });
};

exports.helpController = (req, res) => {
  const title = "Help Page";
  res.render("pages/help", { title });
};
