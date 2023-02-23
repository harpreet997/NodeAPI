
const Task = require('../models/task');

const getAllUsers = async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
}

const createUser = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const singleUser = async (req, res) => {
    const task = await Task.findOne({_id: req.params.id})
    res.json({id: task})
}

const editUser = (req, res) => {
    res.send('Edit User')
}

const deleteUser = async (req, res) => {
    const task = await Task.findOneAndDelete({_id: req.params.id})
    res.json({msg: "Deleted Successfully"})
}

module.exports = {
    getAllUsers,
    createUser,
    singleUser,
    editUser,
    deleteUser
}