const mongoose = require('mongoose');
const msgSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true
    }
})
const userTable = mongoose.model('user', msgSchema);
module.exports = userTable;

