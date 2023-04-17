const {modelName} = require('mongoose');
const {Schema, model} = require('../connection');


const myschema = new Schema({
    name : String,
    email :String,
    password : String
});

router.get('/getall', (req,res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
       console.error(err);
       res.status(500).json(err); 
    });
})

module.exports = model('users', myschema);

