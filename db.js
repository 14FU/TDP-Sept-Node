const mongoose = require('mongoose');


// call back function to check if the connetcion worked 
mongoose.connect("mongodb://localhost:27017/goosedb",{
    useNewUrlParser: true
});

// schema - how we are going to design the table 
const gooseSchema = new mongoose.Schema ({
    size: Number, colour: String, name: String
});

// will create object with all the mongo stuff (allows you to query the table)
const gooseModel = mongoose.model("goose",gooseSchema);



// just exports it 
module.exports = {
    gooseModel
}

// promise way of checking if function has worked 
// mongoose connect(uri, opts).then() => {console.log('connected x')}, (err)=> {};
