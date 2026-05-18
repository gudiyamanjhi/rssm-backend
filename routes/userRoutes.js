const express = require("express");
const router = express.Router();
const { SignupUser, LoginUser ,UpadteProfile} = require("../controllers/userControllers")

router.post("/signup", SignupUser);
router.post("/login", LoginUser);
router.post("/updateProfile", UpadteProfile);

module.exports = router;