const mongoose = require('mongoose');
const msgSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    msg: {
        type: String,
        required: true
    },
})
const messageTable = mongoose.model('msg', msgSchema);
module.exports = messageTable;

