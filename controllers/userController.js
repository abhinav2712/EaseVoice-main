const userModal = require("../models/userModel");

// login user
const loginController = async (req, res) => {
try{


    const { userId, password } = req.body;
    const user = await userModal.findOne({ userId, password, verified: true });
    res.status(200).send('Login Successfully');
    
} catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }  
};

//register
const registerController = async (req, res) => {
  try {
    const newUser = new userModal(req.body);
    await newUser.save();
    res.status(201).send("new User added Successfully!");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

module.exports = {
  loginController,
  registerController,
};