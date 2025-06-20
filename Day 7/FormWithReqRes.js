const fileSys = require("fs");
const getForm = require("./getForm");

const requestHandler = (request,response)=>{

  console.log(request.url,request.method);

  if(request.url == "/"){
    response.setHeader("Content-Type","text/html");
    response.write(getForm());
    return response.end();
  }
  else if(request.url.toLowerCase() == "/submit-details" && request.method == "POST"){
    const body = [];
    request.on("data",(chunk)=>{
      //console.log(chunk);
      body.push(chunk);
      //console.log(body);
    })

    request.on("end",()=>{
      let fullBody = Buffer.concat(body).toString();
      //console.log(fullBody);
      let urlBody = new URLSearchParams(fullBody);
      //console.log(urlBody);
      let myData = {};
      for(let [key,value] of urlBody.entries()){
        myData[key] = value;
      }
      console.log(myData);
      fileSys.writeFileSync("data.txt",JSON.stringify(myData));
    })
    response.statusCode = 302;
    response.setHeader("Location","/");
    response.end();
  }
};

module.exports = requestHandler;


