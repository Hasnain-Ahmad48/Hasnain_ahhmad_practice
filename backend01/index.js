const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello Hasnain");
});

app.listen(3000, () => {
  console.log("the server is started at port 3000");
});
