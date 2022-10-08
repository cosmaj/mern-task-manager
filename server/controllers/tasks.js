const Task = require('../modules/task-module')

 const getSingleTask = async (req, res) => {
    try {
        let taskID = req.params.id
        let task = await Task.findById(taskID)
        if (task === null) return res.status(204).json({ data: 'null' })
        if (task) return res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllTasks = async (req, res) => {
    try {
        let tasks = await Task.find()
        if (tasks === null) return res.status(204).json({ data: 'null' })
        if (tasks) return res.status(200).send(tasks)
    } catch (error) {
        res.status(500).send(error)
    }
}

const createTask = async (req, res) => {
    try {
        let task = req.body
        await Task.create(task)
        res.status(201).json(`Task created`)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateSingleTask = async (req, res) => {
    try {
        let taskID = req.params.id
        let { description, duration, completed } = req.body
        let task = await Task.findByIdAndUpdate(taskID, 
            {
                $set: 
                {
                    // username:username,
                    description:description, 
                    duration:duration,
                    completed: completed
                }},
            { 
                new: true 
            })
        res.status(201).send(task)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteSingleTask = async (req, res) => {
    try {
        let taskID = req.params.id
        let task = await Task.findByIdAndDelete(taskID)
        if (task === null) return res.status(204).json({ data: 'null' })
        if (task) return res.status(200).send(`Task deleted successfuly`)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteAllTasks = (req, res) => {
    res.status(200).json('All Tasks deleted')
}

module.exports =  { getAllTasks, getSingleTask, createTask, updateSingleTask, deleteAllTasks, deleteSingleTask }