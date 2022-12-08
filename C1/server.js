
console.log("start");
const http = require('http');

const server  =  http.createServer((req, res)=>{
 
    // console.log("req received",req);
    console.log("res received",res);
    res.end("Hello World");
 

})

server.listen(3500);

console.log("end");