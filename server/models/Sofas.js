// models/Sofas.js 
const mongoose = require('mongoose');

const SofasSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,  // is this required or not?
    },
    type: {
        type: String,
        required: true
    },
   richDescription: {
    type: String,
    default: ''
   },
   image: {
    type: String,
    default: ''
   },
   images: []  // TYPE OF ARRAY
   ,
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInstock: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
    // rating: {
    //     type: Number,
    //     default: 0,
    // },
    // numbReview: {
    //     type: Number,
    //     default: 0,
    // },
    // isFeatured: {
    //     type: Boolean,
    //     default: false,
    // },
});

module.exports = mongoose.model("Sofas", SofasSchema); //export file


