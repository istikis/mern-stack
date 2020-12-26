const userCtrl = {};

const User = require('../models/User');
const user = require('../models/User');

// GET ALL
userCtrl.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users);
}

// PUT
userCtrl.createUsers = async(req, res) => {

    const { username } = req.body;
    const newUser = new User({ username });
    await newUser.save();
    res.json('User Created.')
}

// DELETE
userCtrl.deleteUsers = async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User Deleted.' })
}


module.exports = userCtrl;