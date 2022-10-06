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
app.delete('/delete/id',(req,res)=>{
    res.send(names.splice(req.params.id,2));
});

app.post("/createFU",(req,res)=>{
     FU.push(req,body);
     res.status(201).send(FU);
 })



const server = app.listen(1412, () => console.log(`Server started on port ${server.address().port}`));

// req= request res= respond/resukt 