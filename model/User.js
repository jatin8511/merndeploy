const mongoose = require('mongoose')
const UserChema = mongoose.Schema({
    name: String,
    email: String,
    msg: String,
})

const User = mongoose.model('contact',UserChema)
module.exports = User