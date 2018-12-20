const mongoose = require('mongoose')

const scheduleSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: 'Please enter your name',
        trim: true
    },
    studentEmail: {
        type: String,
        required: 'Please enter your email address',
        trim:true
    },
    classEntry: {
        type: String,
        required: 'Please enter your class',
        trim:true
    },
    message: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Schedule', scheduleSchema)