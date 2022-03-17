const express = require("express");
const fs = require('fs')

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  console.log(req.get('Accept'));
 fs.readFile('./pages/index.html', (err, data)=>{
   if(err){
     console.log(err);
     res.send('<h1>Something wen wrong</h1>')
   }else{
     res.write(data);
     res.end()
   }
 })
});
app.get("/about", (req, res) => {
  fs.readFile('./pages/about.html', (err, data)=>{
    if(err){
      res.send('<h1>Something is wrong</h1>')
    }else{
      res.write(data)
      res.end()
    }
  })
});
app.get("/help", (req, res) => {
  fs.readFile('./pages/help.html', (err, data)=>{
    if(err){
      res.send('<h1>Something is wrong</h1>')
    }else{
      res.write(data)
      res.end()
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
