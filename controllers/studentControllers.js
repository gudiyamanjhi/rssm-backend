const express = require("express")
const StudentReg = require('../models/StudentModel')
const fs = require('fs')

const createStudent = async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    try {

        const {
            firstName,
            lastName,
            fatherName,
            className,
            duration,
            email,
            address,
            gender,
            mobile,
            mothername,
            admissionDate,
            admissionMonth,
            Age,
            State,

        } = req.body;

        // Current Month
        // const currentMonth = new Date().toLocaleString('default', {
        //     month: 'long'
        // });

        const CreateStudentData = new StudentReg({
            firstname: firstName,
            lastname: lastName,
            fathername: fatherName,
            className: className,
            duration: duration,
            email: email,
            address: address,
            mobileno: mobile,
            gender: gender,
            mothername: mothername,
            Age: Age,
            State: State,
            admissionMonth: admissionMonth,
            admissionDate: admissionDate,
            image: {
                data: fs.readFileSync("uploads/" + req.file.filename),
                ContentType: "uploads/",
            }
        })

        const saveStudent = await CreateStudentData.save();

        if (saveStudent) {
            res.status(200).json({
                message: "Student Create Succesfull",
                status: true,
                student: saveStudent,
            });
        } else {
            res.status(200).json({ message: "success in studente form", status: false });
        }
    } catch (error) {
        res.json({ error: error, message: "Error in Student Regsiter Form" });


    }
}

const getStudents = async (req, res) => {
    // console.log(allstudents)
    try {
        const fetchstudent = await StudentReg.find({});
        if (!fetchstudent) {
            res.status(200).json({ message: "failed  in fetch", status: false });
        }
        res.status(200).json({ message: "Success", status: true, user: fetchstudent });
    } catch (error) {
        res.json({ error: error, message: "Error in Fetch Students" });
    }
}

const deleteStudent = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const deletestudent = await StudentReg.findOneAndDelete({ _id: id })
    console.log(deletestudent);
    res.json({ message: "success", status: true })
}

const updateStudent = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.params);

        const { id } = req.params;

        const updatedStudent = await StudentReg.findByIdAndUpdate(
            id,
            req.body,
            {

                new: true
            }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.status(200).json({
            message: "Student updated successfully",
            user: updatedStudent,
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

module.exports = { createStudent, getStudents, deleteStudent, updateStudent }