const express = require("express");
const FU = [];
const app = express();
app.get('/FU',(req,res)=>{
    res.send("Hi there im FU")
});
let names = ["Thom","Shak","Mimi","Luke","Mike"];
app.get('/getAll',(req,res)=>{
    res.send(names)
});
app.get('/get/:id',(req,res)=>{
    res.send(names[req.params.id])

});
app.delete('/delete/:id',(req,res)=>{
    res.send(names.splice(req.params.id,1));
});
// body parser - this 
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/createNames",(req,res)=>{
     names.push(req.body.names);
     res.status(201).send(names);
 })



const server = app.listen(1412, () => console.log(`Server started on port ${server.address().port}`));

// req= request res= respond/resukt 