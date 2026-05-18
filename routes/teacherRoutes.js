const express = require("express")
const router = express.Router();
const { createTeacher, getTeachers,deleteTeacher,updateTeacher} = require("../controllers/teacherControllers")


router.post("/registerform", createTeacher);
router.get("/allTeachers", getTeachers);
router.delete("/deleteTeacher/:id",deleteTeacher)
router.post("/updateTeacher/:id",updateTeacher)

module.exports = router;
