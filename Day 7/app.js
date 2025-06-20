const http = require("http");
const requestHandleFun = require("./FormWithReqRes");

const server = http.createServer(requestHandleFun);

const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`My server is here : http://localhost:${PORT}`);
})