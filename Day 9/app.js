const http = require("http");
let calc = require("./function");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  console.log("Hello my server auto restart");
  calc();
});


const PORT = 3005;

server.listen(PORT,()=>{
  console.log(`My server is here : http://localhost:${PORT}.`);
})