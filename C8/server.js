
//simulating  an external server ex.: meta, google , etc

//---setup----------------------
const express = require("express");
const axios = require("axios").default;

const app = express();
const client = [];


//---routing------------------------
app.post("/webhook", (req, res) => {
  console.log(req.query.callback);
  client.push(req.query.callback);
  res.end();
});

app.delete("/webhook", (req, res) => {
  console.log("deleting");
  client.splice(client.indexOf(req.query.callback), 1);
  res.end();
});



setInterval(() => {//every second there's a 17% chance  to tell clients hello(from webhook)
  if (Math.random() < 0.17) {
      client.forEach((url) => {
          axios.post(url, { message: "hello" });
      });
  }
}, 1000);




//---listen-------------------------
app.listen(3001, () => {
  console.log("listening on port 3001");
});
