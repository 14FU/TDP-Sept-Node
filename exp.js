// export the js and initialise it 
const express = require("express");
const app = express();

const routes = require('./router/exp2');

// body parser - this allows for the parsing of request bodies into JS ojects 

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(routes);
 
// this should alwasy be the last line of code. this coonnect the js to the server 
const server = app.listen(4450, () => console.log(`Server started on port ${server.address().port}`));
// this is the the ocd eot connect to server 

