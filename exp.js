const express = require("express");
const FU = [];
const app = express();
app.get('/',(req,res)=>{
    res.send("Hi there im FU")
});
let names = [Thom,Shak,Mimi,Luke,Mike];
app.get('/getAll',(req,res)=>{
    res.send(names)
});
app.get('/get/:id',(req,res)=>{
    res.send(names[req.params.id])

});
app.get('/delete/id')
app.post("/createFU",(req,res)=>{
     FU.push(req,body);
     res.status(201).send(ducks);
 })
const server = app.listen(1412, () => console.log(`Server sucessfully started on port ${server.address().port}`));

// req= request res= respond/resukt 