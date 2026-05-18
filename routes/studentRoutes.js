const express = require("express")
const router = express.Router();
const { createStudent, getStudents, deleteStudent ,updateStudent} = require("../controllers/studentControllers")


router.post("/registerform", createStudent);
router.get("/allStudents", getStudents);
router.delete("/deleteStudent/:id",deleteStudent)
router.delete("/updatestudent/:id",updateStudent)

module.exports = router;
