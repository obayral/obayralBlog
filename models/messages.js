const mongoose = require('mongoose');
const config = require('../config/database');

const MessageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    },
    lastname: {
        type: String,
        required: true,
        uppercase: true
    },
    email: {
        type: String,
        required: true,
        uppercase: true
    },
    message: {
        type: String,
        required: true,
        uppercase: true
    }
});
const message = module.exports = mongoose.model('Message', MessageSchema);
