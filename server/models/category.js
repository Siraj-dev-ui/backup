const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,  // is this required or not?
    },
    icon: {
        type: String,
        required: true
    },
   color: {
    type: String,
   }
})

exports.Category = mongoose.model('Category', categorySchema);