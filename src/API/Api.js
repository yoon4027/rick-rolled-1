module.exports = class API {
  start() {
    const { URL } = require("../Config.js");
const express = require("express");
const app = express();
app.get("/", function(req, res){
    res.status(200).redirect(URL);
});
app.get("about", function(req, res){
  res.status(200).json({ "res": "GET RICK ROLLED" })
});
// app.listen(process.env.PORT, () => console.log(`API online on ${process.env.PORT}`))
  }
}