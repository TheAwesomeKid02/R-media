const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Person Data', personSchema);

