const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/authController");

//middleware

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
router.get("/", test);
router.post("/Register", registerUser);
router.post("/Profile", loginUser);
router.get("/userProfile", getUserProfile);
module.exports = router;
