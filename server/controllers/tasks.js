const Task = require('../modules/task-module')

 const getSingleTask = (req, res) => {
    res.status(200).json('Single task requested')
}

const getAllTasks = (req, res) => {
    res.status(200).json('All tasks requested')
}

const createTask = (req, res) => {
    res.status(201).json('Task created')
}

const updateSingleTask = (req, res) => {
    res.status(200).json(`Update Single task requested id: ${req.params.id}`)
}

const deleteSingleTask = (req, res) => {
    res.status(200).json(`Delete Single task requested id: ${req.params.id}`)
}

const deleteAllTasks = (req, res) => {
    res.status(200).json('All Tasks deleted')
}
