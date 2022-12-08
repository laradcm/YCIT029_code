

//-------imports and setup-----------
const { urlencoded } = require("express");
const express = require("express");
const app = express();
const PORT = 3100;


//-----start server-------------------
app.listen(PORT, () => {
    console.log(PORT +": listening...");
})

//------parsers & serving-------------
app.use(express.json()); //json body parsing
app.use(urlencoded({extended:true}));//form body parsing
app.use(express.static("public"));//serves index.html in the public folder


//-----middlewares-------------------
app.use(hello);
app.use(name);


//-----routers------------------------
app.get("/hi",(req, res) => {
    console.log("hi");
    console.log(req.message);
    console.log(req.name);
    res.json({"name": "Lara"});
});


//----supporting functions-----------
function hello(req, res, next){
    req.message = "hello";
    next();
}

function name(req, res, next){
    req.name = "World";
    next();
}

