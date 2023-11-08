const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json(`test is working`);
};
//Register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    // check password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "گذرواژه وارد شده بایستی حداقل شامل 6 کاراکتر باشد",
      });
    }
    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "این ایمیل قبلا ثبت شده است",
      });
    }
    const hashedPassword = await hashPassword(password);
    //create user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "کاربر با مشخصات وارد شده صحیح نمیباشد",
      });
    }

    //check password match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "گذرواژه وارد شده اشتباه است",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const getUserProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getUserProfile,
};
