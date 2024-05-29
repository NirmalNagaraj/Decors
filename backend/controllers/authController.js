const { Auth } = require("../models/Admin");
const bcrypt = require('bcryptjs');

module.exports.signup = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new Auth({ username, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.Login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const validUser = await Auth.findOne({ username });
    if (!validUser) return res.status(404).json({ message: 'User not found' });
    
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return res.status(401).json({ message: 'Wrong credentials' });
    
    // If you want to return only user information without a token
    const { password: hashedPassword, ...rest } = validUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
