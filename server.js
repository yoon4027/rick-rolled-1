const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.status(200).send({ json: "Hello" });
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);
