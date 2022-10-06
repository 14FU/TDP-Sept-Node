const express = require("express");
const ducks = [];
const app = express();
app.get("/hello",(req,res)=>{
    res.send("hello world!")
});
app.post("/createDuck",(req,res)=>{
    ducks.push(req,body);
    res.status(201).send(ducks);
})
const server = app.listen(1412, () => console.log(`Server sucessfully started on port ${server.address().port}`));