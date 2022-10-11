// the idea of router allows you to sperate code 
//making it more effiencent and easier to read and find 
const router = require("express").Router();

// caling the schema model after we have xported 
const {gooseModel} = require ("../db")
//.. means to come out of the folder to look for that file (go back a folder)
// going into a folder would be ./


 let geese = [ 'thom','mimi', 'luke','mike', 'shak'];

//apply {} so it will find all the values inside the model this will be get all 
router.get('/goosey', (req,res) => gooseModel.find({}).then (results => res.send(results)).catch(err=> next(err)));

// post , status code for creatign is 201
router.post('/addGoose', (req,res,next) => {
    gooseModel.create(req.body).then(result => res.status(201).send(result)).catch(err => next(err));
});

// to admend stuff 
router.put('/replace/:index', (req,res)=>{
    const {id} = req.params;
    const newRecord = req.body;
    gooseModel.findByIdAndUpdate(id,newRecord).then (results => res.send(results)).catch(err=> next(err));
});

router.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    gooseModel.findByIdAndDelete(id).then (results => res.send(results)).catch(err=> next(err));
});
module.exports= router;