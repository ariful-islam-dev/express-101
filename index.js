const express = require("express");

const cors = require('cors');
const morgan = require('morgan')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors())
app.use(globalMiddleware)
app.use(require('./routes'))




app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});


// this is a middleware signature

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