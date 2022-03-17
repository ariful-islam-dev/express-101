const router = require('express').Router();
const fs = require("fs");


router.get("/", (req, res) => {
    fs.readFile("./pages/index.html", (err, data) => {
      if (err) {
        console.log(err);
        res.send("<h1>Something wen wrong</h1>");
      } else {
        res.write(data);
        res.end();
      }
    });
  });
  router.get("/about",  (req, res) => {
    fs.readFile("./pages/about.html", (err, data) => {
      if (err) {
        res.send("<h1>Something is wrong</h1>");
      } else {
        res.write(data);
        res.end();
      }
    });
  });
  router.get("/help", (req, res) => {
    fs.readFile("./pages/help.html", (err, data) => {
      if (err) {
        res.send("<h1>Something is wrong</h1>");
      } else {
        res.write(data);
        res.end();
      }
    });
  });


module.exports = router;