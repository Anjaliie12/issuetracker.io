const mongoose = require('mongoose');

const url='mongodb+srv://anjaliyadav59917:anjali@cluster0.p3d1qoz.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
})
.catch((err) => {
    console.error(err);
    
});

module.exports = mongoose;