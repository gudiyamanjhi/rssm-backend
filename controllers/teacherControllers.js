const express = require("express")
const TeacherReg = require('../models/TeacherModel')
const fs = require('fs')

const createTeacher = async (req, res) => {
    console.log(req.body)
      console.log(req.file)
    try {

        const {
            firstname,
            lastname,
            fathername,
            email,
            experience,
            Qualification,
            contact,
            mothername,
            age,


        } = req.body;


        const CreateTeacherData = new TeacherReg({
            firstname: firstname,
            lastname: lastname,
            fathername: fathername,
            email: email,
            mothername: mothername,
            age: age,
            contact: contact,
            Qualification: Qualification,
            experience: experience,
            image: {
                data: fs.readFileSync("uploads/" + req.file.filename),
                ContentType: "uploads/",
            }
            // joiningMonth: joiningMonth,
            // joiningDate: joiningDate,
        })

        const saveTeacher = await CreateTeacherData.save();
        console.log(saveTeacher)
        if (saveTeacher) {
            res.status(200).json({
                message: "Teacher Create Succesfull",
                status: true,
                teacher: saveTeacher,
            });
        } else {
            res.status(200).json({ message: "success in teacher form", status: false });
        }
    } catch (error) {
        res.json({ error: error, message: "Error in teacher Regsiter Form" });
    }
}

const getTeachers = async (req, res) => {
    try {
        const fetchteacher = await TeacherReg.find({});
        if (!fetchteacher) {
            res.status(200).json({ message: "failed  in fetch", status: false });
        }
        res.status(200).json({ message: "Success", status: true, user: fetchteacher });
    } catch (error) {
        res.json({ error: error, message: "Error in Fetch teacher" });
    }
}

// ***************************************DeleteTeacher******************************

const deleteTeacher = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const deleteteacher = await TeacherReg.findOneAndDelete({ _id: id })
    console.log(deleteteacher);
    res.json({ message: "success", status: true })
}

// ***************************updatedteacher***********************************


const updateTeacher = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.params);

        const { id } = req.params;

        const updatedTeacher = await TeacherReg.findByIdAndUpdate(
            id,
            req.body,
            {

                new: true
            }
        );

        if (!updatedTeacher) {
            return res.status(404).json({
                message: "Teacher not found",
            });
        }

        res.status(200).json({
            message: "Teacher updated successfully",
            user: updatedTeacher,
        });

    } catch (error) {
        console.error(error);
        // 🔴 Default server error
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports = { createTeacher, getTeachers, deleteTeacher,updateTeacher}