const express = require('express');
const router = express.Router()
const {getAllUsers, createUser, singleUser, editUser, deleteUser} = require('../controllers/users')

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(singleUser).patch(editUser).delete(deleteUser);

module.exports = router;