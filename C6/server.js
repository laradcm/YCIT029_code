
//----init--------------------------
const express = require("express");

const COUPON_CODES = ["123", "456", "789"];

const app = express();

const user = {
    id: "12345",
    firstName: "bobby",
    lastName: "connoly",
    isSignedIn: false

};


//----setup------------------------

//parsers
app.use(express.static("public"));//only works with GET, otherwise it is ignored
app.use(express.urlencoded({extended: true}));



//------middleware------------------------
//monitor
app.use((req, res, next) => {
    console.log(req.method, req.url, req.body);
    next();
});

//GET
app.get("/me", (req, res) => {
    if(user.isSignedIn){
        res.status(200).json(user);
    }else{
        res.status(401).send("gotta sign in");
    }
});

//POST
app.post("/login", (req, res) => {
    user.isSignedIn = true;
    res.status(200).redirect("/");
})

app.post("/logout", (req, res) => {
    user.isSignedIn = false;
    res.status(200).send("you signed out");
})






//------listen------------------
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});




