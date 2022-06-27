// We import express router
const { Router } = require('express');
// We import the controllers that we just made
const {
createUser,
getUsers,
getUserById,
updateUser,
deleteUser,
} = require('../controllers/users');
// We initialize the router
const router = Router();
// Route for creating user
router.post('/', createUser);
// Route for getting all users
router.get('/', getUsers);
// Route to get user by id
router.get('/:userId', getUserById);
// Route to update user
router.put('/:userId', updateUser);
// Route to delete user
router.delete('/:userId', deleteUser)
// We export the router
module.exports = router;