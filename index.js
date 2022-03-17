const express = require("express");
const fs = require("fs");
const cors = require('cors');
const morgan = require('morgan')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors())
app.use(globalMiddleware)

app.get("/", (req, res) => {
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
app.get("/about", localMiddleware, (req, res) => {
  fs.readFile("./pages/about.html", (err, data) => {
    if (err) {
      res.send("<h1>Something is wrong</h1>");
    } else {
      res.write(data);
      res.end();
    }
  });
});
app.get("/help", (req, res) => {
  fs.readFile("./pages/help.html", (err, data) => {
    if (err) {
      res.send("<h1>Something is wrong</h1>");
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});


// this is a middleware signature

function handler(req, res, next){

}

function middlewareSignature(req, res, next){
  next();
}

function globalMiddleware(req, res,next){
  console.log(`${req.method} - ${req.url}`);
  console.log('I am globalMiddleware');

  if(req.query.bad){
    return res.status(400).send('Bad Request')
  }
  next()
}

function localMiddleware(req, res, next){
  console.log('This is local middleware '+ req.url);
  next()
}