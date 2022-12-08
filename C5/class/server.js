
//imports and vars
const express = require("express");
const COUPON_CODES = ["123", "456", "789"];

// Instantiate app
const app = express();

//shows method
app.use((req, res, next) => {
    console.log(`received a request:  ${req.method} from ${req.url}`);
    next();
})


// Middleware to extract the form data from the request body
// app.use(
//     express.urlencoded({
//         extended: true,
//         type: "application/x-www-form-urlencoded",
//     })
// );

//POST
app.post("/login", (req, res) => {
    console.log("at login");
    res.status(201).end();
})


// Add static files middleware
app.use(express.static("public"));//only works with GET, otherwise it is ignored

// Begin listening for requests
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
