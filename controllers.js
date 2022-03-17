const fs = require("fs");

exports.homeController = (req, res) => {
   const error =   new Error('Bad Request')
    error.status = 400;
    // throw error
  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.send("<h1>Something wen wrong</h1>");
    } else {
      res.write(data);
      res.end();
    }
  });
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
