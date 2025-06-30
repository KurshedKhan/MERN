const express = require("express");
const bodyParser = require("body-parser")

const app = express();


app.use((req,res,next)=>{
  console.log("This is my first middleware : ",req.url,req.method);
  next()
})

app.use((req,res,next)=>{
  console.log("This is my second middleware : ",req.url,req.method);
  next()
})

app.get("/",(req,res,next)=>{
  console.log("This is my third middleware ",req.url);
  res.send("<h1>This is my first response.</h1>");
})

app.get("/contact-us",(req,res,next)=>{
  console.log("This is my details page.");
  res.send(`
    This is my details page.
    <form action="/contact-us" method="POST"> <br>
    <input type="text" name="name" placeholder="Enter your name "><br><br>
    <input type="email" name="email" placeholder="Enter your email "><br><br>
    <input type="submit" value="submit">
    </form>
    `);
})

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/contact-us",(req,res,next)=>{
  console.log("Your detailed is send successfully . Thank you.",req.body);
  res.send("Your detailed is send successfully . Thank you.");
})
const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`This is my server : http://localhost:${PORT}`);
})