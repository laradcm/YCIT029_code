
//-----setup----------------------------------------------
const express = require("express");
const app = express();

//-----GET Method----------------------------------------------
//middleware == function
app.use( (req, res, next) => {

    console.log(`a ${req.method} request was received` );

    console.log(req.query);
    console.log(req.query["are-you-happy"]);

    next();//very important to avoind breaking the chain
}  );

//-----POST Method----------------------------------------------
app.use(express.urlencoded());
app.use( express.json());

app.post("/", (req, res) => {

    console.log("POST arrived ");//needs middleware for body
    console.log(req.body);
    res.json({requestBody: req.body});

})


//------------------middleware == function to everything in the public folder to run(html)
app.use(  express.static("public")  );


//----ports sub sections can be made------------------------------
//using the get method to 
// app.get("/hi" , (req, res)=>{
//     res.end("hello World 123");
// });

// app.get("/lara" , (req, res)=>{
//     res.end(" Lara");
// });


//-----start the server------------------------------------------
app.listen(3100, () => {

    console.log("server is listening");
});