const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(
    `
       <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NodeJS is Awesome</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
      }
      .container {
        width: 50%;
        margin: 2rem auto;
        padding: 2rem;
        background: #ddd;

      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Hello None js You are Awesome</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil
        sequi perspiciatis illo, deleniti, distinctio eos tenetur ducimus
        officia eveniet molestias ratione quisquam nobis, vitae dolor itaque
        enim vel fugit.
      </p>
    </div>
  </body>
</html>

       `
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
