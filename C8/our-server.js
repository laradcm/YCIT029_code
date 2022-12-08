
//----setup
const express = require("express");
const app = express();


//---routing
app.post("/event", (req, res) => {
  console.log("a webhook was received");

  res.end();
});

//---listen
app.listen(3005
  , () => {
  console.log("listening on port 3005");
});
