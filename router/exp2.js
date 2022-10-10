// the idea of router allows you to sperate code 
//making it more effiencent and easier to read and find 
const router = require("express").Router();
let names = [ 'thom','mimi', 'luke','mike', 'shak'];
router.get('/', (req,res) => res.send('hiya guys my name is FU'));
router.get ('/getAll', (req,res) => res.send(names));
router.get('/get/:id',(req,res) => res.send(names[req.params.id]));

router.delete('/delete/:id',(req,res)=>{
    res.send(names.splice(req.params.id,1));
});

router.post("/createNames", (req, res) => {
    names.push(req.body.names);
    res.status(201).send(names);
    });

    //creatign a request handler that replaces a name IN THE ARRAY with a name SPECIFIED IN the query. 
router.put('/replace/:index', (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old}sucessfully relaced with ${name}`);
    });

module.exports= router;




    //NOTES WITH OLD CODE 
//     const express = require("express");
// const app = express();

// // create a GET handler that requests at */* and name it send response *hi there in FU*
// const FU = [];
// app.get('/FU',(req,res)=>{
//     res.send("Hi there im FU")
// });

// // responds to the whole array
// let names = ["Thom","Shak","Mimi","Luke","Mike"];
// app.get('/getAll',(req,res)=>{
//     res.send(names)
// });

// //fetches the name from the index 
// app.get('/get/:id',(req,res)=>{
//     res.send(names[req.params.id])
// });

// //deletes specified name in the index 
// app.delete('/delete/:id',(req,res)=>{
//     res.send(names.splice(req.params.id,1));
// });
// // splice - allows you to picks a certain parameters from the array 

// // body parser - this allows for the parsing of request bodies into JS ojects 

// const bodyParser = require("body-parser");

// app.use(bodyParser.json());

// //create a request handler that creates a new name in the array by sending a JSON object in the request body 
// app.post("/createNames",(req,res)=>{
//      names.push(req.body.names);
//      res.status(201).send(names);
//  })
 
//  //creatign a request handler that replaces a name IN THE ARRAY with a name SPECIFIED IN the query. 
// app.post('/replace/:index', (req,res)=>{
//     const name = req.query.name;
//     const index = req.params.index;
//     const old = names[index];
//     names[index] = name;
//     res.status(202).send(`${old}sucessfully relaced with ${name}`);
// });

// // CREATE SOME MIDDLEWARE
// $ will take things out the string elemet of it $ acts like *not*
// middleware will hvae 3 parameters req res and next 

// app.use ((req,res,next)=>{
//     const logEntry = `host: ${req.host}
//     ip: ${req.ip}
//     method: ${req,method}
//     path: ${req.path}
//     time: ${new Date()}`;
//     console.log(logEntry);
//     next();
// });
// app.get('/',(req,res) =>{
//     res.send('Hiya Kids');
// });

// // create an endpoitnthat throws and error message.
// app.get('/getError',(req, res,next){
//     next (Error('Message'));
// });


// // Error- handling middleware that logs the error's stacktrace to the console then passes it on 
// app.use((err,req,res,next)=>{
//     console.log(err,stack);
//     next(err);
// });
// //error handling must ALWAYS have four parameters 
// //use is like a default 


// // sends a response informing the user that somehting has gone wrong 
// app.use((error,req,res,next)=>{
//     res.status(500).send(err.message);
// });
// // when something goe wrong it will RESPOND by sending an error
