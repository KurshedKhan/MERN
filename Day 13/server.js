const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname,"public")));

app.use("/bootstrap",express.static(path.join(__dirname,"node_modules/bootstrap/dist")));

app.get("/",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"views","index.html"));
})

app.listen(port,()=>{
  console.log(`server is running at http://localhost:${port}.`);
});