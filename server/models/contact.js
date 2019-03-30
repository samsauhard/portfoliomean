let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    message: String,
    age: Number
},
{
    collection: "contactdata"
});

module.exports = mongoose.model('contact', contactSchema);