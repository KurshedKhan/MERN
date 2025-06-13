const http = require("http");

const response =  http.createServer((req,res)=>{
  console.log(res);
});

response.listen(3000);
