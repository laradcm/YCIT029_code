
const fs = require("fs");//fs for file system

const addressHeader = [
  "Lala",
  "123 Main Street",
  "New York, NY 10001",
];

fs.writeFileSync("hello.txt", "Hello from Node.js");//writes to file

const letterContents = fs.readFileSync("hello.txt", "ascii");//reads/grabs from file

console.log(letterContents);

fs.writeFileSync(
  "with-address.txt",
  addressHeader.join("\n") + "\n\n" + letterContents
);

const myStream = fs.createReadStream("with-address.txt", "utf8");//reads 64kb chunks

myStream.on("data", (chunk) => {
  console.log("----- NEW CHUNK -----");
    console.log(chunk);
});