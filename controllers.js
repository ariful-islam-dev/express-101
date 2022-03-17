const fs = require("fs");

exports.homeController = (req, res) => {
  const title = "Dynamic Title";
  res.render("home", { title });
};

exports.aboutController = (req, res) => {
  fs.readFile("./pages/about.html", (err, data) => {
    if (err) {
      res.send("<h1>Something is wrong</h1>");
    } else {
      res.write(data);
      res.end();
    }
  });
};

exports.helpController = (req, res) => {
  fs.readFile("./pages/help.html", (err, data) => {
    if (err) {
      res.send("<h1>Something is wrong</h1>");
    } else {
      res.write(data);
      res.end();
    }
  });
};
