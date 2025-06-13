const http = require("http");

const response =  http.createServer((req,res)=>{
  console.log(req.url);
  console.log(req.headers);
});

const PORT = 3000;
response.listen(PORT,()=>{
  console.log(`My Port is here : http://localhost:${PORT}`);
});
