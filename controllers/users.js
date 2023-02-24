
const Task = require('../models/task');

const getAllUsers = async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
}

const createUser = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({msg: error})
    }

}

const singleUser = async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id })
    res.json({ id: task })
}

const editUser = async (req, res) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id}, req.body)
    res.json({ msg: "User Updated Successfully" })
}

const deleteUser = async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id })
    res.json({ msg: "User Deleted Successfully" })
}

module.exports = {
    getAllUsers,
    createUser,
    singleUser,
    editUser,
    deleteUser
}