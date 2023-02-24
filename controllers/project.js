
const Project = require('../models/project');

const getAllProjects = async (req, res) => {
    const projects = await Project.find({})
    res.status(200).json({projects})
}

const createProject = async (req, res) => {
    const project = await Project.create(req.body)
    res.status(201).json({project})
}

const singleProject = async (req, res) => {
    const project = await Project.findOne({_id: req.params.id})
    res.json({id: project})
}

const editProject = (req, res) => {
    res.send('Edit User')
}

const deleteProject = async (req, res) => {
    const project = await Project.findOneAndDelete({_id: req.params.id})
    res.json({msg: "Deleted Successfully"})
}

module.exports = {
    getAllProjects,
    createProject,
    singleProject,
    editProject,
    deleteProject
}