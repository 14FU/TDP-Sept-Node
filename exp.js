//  to intialise it open up new terminal hit dropdown next to + (chnage to bash) 
// then type npm init -y, to install express type npm install express 
//^^^ ALL OF THE ABOVE IS DONE IN TERMINAL BASH^^^^


// export the js and initialise it 
const express = require("express");
const app = express();

// create a GET handler that requests at */* and name it send response *hi there in FU*
const FU = [];
app.get('/FU',(req,res)=>{
    res.send("Hi there im FU")
});

// responds to the whole array
let names = ["Thom","Shak","Mimi","Luke","Mike"];
app.get('/getAll',(req,res)=>{
    res.send(names)
});

//fetches the name from the index 
app.get('/get/:id',(req,res)=>{
    res.send(names[req.params.id])
});

//deletes specified name in the index 
app.delete('/delete/:id',(req,res)=>{
    res.send(names.splice(req.params.id,1));
});
// body parser - this allows you
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//create a request handler that creates a new name in the array by sending a JSON object in the request body 
app.post("/createNames",(req,res)=>{
     names.push(req.body.names);
     res.status(201).send(names);
 })
 
 //creatign a request handler that replaces a name IN THE ARRAY with a name SPECIFIED IN the query. 
app.post('/replace/:index', (req,res)=>{
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old}sucessfully relaced with ${name}`);
});

// CREATE SOME MIDDLEWARE
// $ will take things out the string elemet of it $ acts like *not*

app.use ((req,res,next)=>{
    const logEntry = `host: ${req.host}
    ip: ${req.ip}
    method: ${req,method}
    path: ${req.path}
    time: ${new Date()}`;
    console.log(logEntry);
    next();
});
app.get('/',(req,res) =>{
    res.send('Hiya Kids');
});

// this should alwasy be the last line of code. this coonnect the js to the server 
const server = app.listen(1412, () => console.log(`Server started on port ${server.address().port}`));

// req= request res= respond/resukt 
// every time you make changes you must Ctrl + C and 
//then type *npm start* to send the server live again
// pick your own port number (4 digits dob is fine)