const express = require('express');
const router = express.Router()
const {getAllProjects, createProject, singleProject, editProject, deleteProject} = require('../controllers/project')

router.route('/').get(getAllProjects).post(createProject);
router.route('/:id').get(singleProject).patch(editProject).delete(deleteProject);

module.exports = router;