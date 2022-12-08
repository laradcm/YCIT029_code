
//get the express module
const express = require("express");

//create an instance of an express application
const app = express();



app.use("/", (req, res, next) => { console.log("middleware"); next();});

app.get("/", (req, res) => { console.log("get"); res.end();});

app.post("/", (req, res) => { console.log("post"); res.end();});

app.put("/", (req, res) => { console.log("put"); res.end();});

app.patch("/", (req, res) => { console.log("patch"); res.end();});

app.listen(3500, (req, res) => {
    console.log("server is listening...");
});