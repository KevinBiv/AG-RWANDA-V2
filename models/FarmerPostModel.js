const { Double } = require('mongodb');
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    postName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Double,
        required: true
    }
}) 