const express = require('express')
const router = express.Router()
const { getSingleTask, getAllTasks, createTask, updateSingleTask, deleteSingleTask, deleteAllTasks } = require('../controllers/tasks')
router.get('/', getAllTasks)
router.post('/', createTask)
router.get('/:id', getSingleTask)
router.delete('/', deleteAllTasks)
router.delete('/:id', deleteSingleTask)
router.put('/:id', updateSingleTask)
router.all('*', (req, res)=>res.status(400).json(`Bad request!`))

module.exports = router