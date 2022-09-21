const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number },
    date: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false }
})

const Task = mongoose.model('task_records', taskSchema)

module.exports = Task