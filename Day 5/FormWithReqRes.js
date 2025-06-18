const http = require("http");
const fileSys = require("fs");

const server = http.createServer((request,response)=>{

  console.log(request.url,request.method);

  if(request.url == "/"){
    response.setHeader("Content-Type","text/html");
    response.write("<html>");
    response.write("<head><title>My Form Page</title></head>");
    response.write("<body>");
    response.write("<h1>My Form for Login</h1>");
    response.write('<form action="/submit-details" method="POST"><label for="username">User Name</label><input type="text" name="username"><br><label for="password">Password</label><input type="password" name="password"><br><label for="gender">Gender</label><br><label for="male">male</label><input type="radio" name="gender" value="male"><label for="female">female</label><input type="radio" name="gender" value="female"><input type="submit" value="submit"></form>');
    response.write("</body>");
    response.write("</html>");
    return response.end();
  }
  else if(request.url.toLowerCase() == "/submit-details" && request.method == "POST"){
    fileSys.writeFileSync("data.txt","Yashveer");
    response.statusCode = 302;
    response.setHeader("Location","/");
    response.end();
  }
});

const PORT = 3005;
server.listen(PORT,()=>{
  console.log(`My server is here : http://localhost:${PORT}`);
})