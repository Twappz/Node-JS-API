// We import the model we just created
const User = require('../models/user');
// Create User Controller
const createUser = async (req, res) => {
    // The try function allows us to not crash our server
    try {
        // We require the data from the body
        const {
            name,
            email,
            age
        } = req.body;
        // Function to verify if the email already exists
        const emailExists = await User.findOne({
            email
        });
        if (emailExists) {
            return res.status(400).json({
                ok: false,
                msg: 'the email is already registered with another account'
            });
        }
        // We create the user
        const user = new User({
            "name": name,
            "email": email,
            "age": age,
        });
        // We save the user on our db
        await user.save();
        // Now we return our new user in json format
        return res.json({
            ok: true,
            user
        });
    } catch (error) {
        // If an error happens it will return Server Error
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Server Error'
        });
    }
}
// We export the create user controller
module.exports = {
    createUser,
}

// Controller that reads all users from database
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.json({
            ok: true,
            users
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Server Error'
        });
    }
}
// Controller that gets one user using its id
const getUserById = async (req, res) => {
    try {
        // We use route params.
        const userId = req.params.userId;
        const user = await User.findById(userId);
        return res.json({
            ok: true,
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Server Error'
        });
    }
}

// Controller that updates the db user
const updateUser = async(req, res) => {
    try {
    // We request data from the body sent to the route
    const data = req.body;
    // We use route params.
    const userId = req.params.userId;
    // We update our user
    const user = await User.findByIdAndUpdate(userId, data);
    return res.json({
    ok:true,
    user
    });
    } catch (error) {
    console.log(error);
    return res.status(500).json({
    ok: false,
    msg: 'Server Error'
    });
    }
    }
    // Controller that deletes the db user
    const deleteUser = async(req, res) => {
    try {
    // We use route params.
    const userId = req.params.userId;
    // We update our user
    const user = await User.findByIdAndDelete(userId)
    return res.json({
    ok:true,
    user
    });
    } catch (error) {
    console.log(error);
    return res.status(500).json({
    ok: false,
    msg: 'Server Error'
    });
    }
    }
    // We export the new controllers
    module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    }