let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    message: String
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);