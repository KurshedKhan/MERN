const http = require("http");

const response =  http.createServer((req,res)=>{

  res.setHeader("Content-Type","text/html");
  res.write("<html>");
  res.write("<head><title>My Page</title></head>");
  res.write("<body>")

  if(req.url == "/"){
 
      res.write("<h1>Welcome to my Home Page</h1>")
      res.write("<h1>Hi,Kese ho</h1>")
     
      return res.end();
  }
  else if(req.url == "/product"){

      res.write("<h1>My Product Page</h1>")
      return res.end();
  }

  else{
      res.write("<h1>Other Page</h1>")
      return res.end();
  }
  res.write("</body>")
  res.write("</html>");
});

const PORT = 3001;
response.listen(PORT,()=>{
  console.log(`My Port is here : http://localhost:${PORT}`);
});
