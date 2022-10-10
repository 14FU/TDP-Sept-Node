//  to intialise it open up new terminal hit dropdown next to + (chnage to bash) 
// then type npm init -y, to install express type npm install express 
//^^^ ALL OF THE ABOVE IS DONE IN TERMINAL BASH^^^^


// export the js and initialise it 
const express = require("express");
const app = express();

const routes = require('./router/exp2');

// body parser - this allows for the parsing of request bodies into JS ojects 

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(routes);
 
// this should alwasy be the last line of code. this coonnect the js to the server 
const server = app.listen(1412, () => console.log(`Server started on port ${server.address().port}`));
// this is the the ocd eot connect to server 

//NOTES 
// + req= request res= respond
// + every time you make changes you must Ctrl + C and 
// + then type *npm start* to send the server live again
// + pick your own port number (4 digits dob is fine)
// + With MIDDLEWARE you must always put next () or res.send() or
// no response will be sent . 
