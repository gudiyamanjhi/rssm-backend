const express = require("express");
const User = require("../models/UserModel")

const SignupUser = async (req, res) => {
    console.log(req.body)
    try {
        const { email, username, name, password, phoneno } = req.body;

        const existuser = await User.findOne({ email: email })

        if (!existuser) {
            const createuser = new User({
                email: email,
                username: username,
                password: password,
                name: name,
                phoneno: phoneno,

            })

            const saveuser = await createuser.save();

            if (saveuser) {
                res
                    .status(200)
                    .json({ message: "success", status: true, user: saveuser })
            } else {
                res.status(500).json({ message: "error", status: false })
            }
        }
        res.json({ message: "Email Already Used", })

    } catch (error) {
        res.json({ error: error, message: "error in signup" })
    }
}


// ***********************Login******************************


const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existUser = await User.findOne({ email: email });
        if (!existUser) {
            res.status(200).json({ message: "failed", status: false });
        }

        if (existUser.password !== password) {
            res.status(200).json({ message: "password incorrect", status: false });
        }
        res.status(200).json({ message: "success", status: true, user: existUser });
    } catch (error) {
        res.json({ error: error, message: "Servor Errro" })
    }
}




const UpadteProfile = async (req, res) => {
    console.log(req.body);
    const email = req.body.email
    console.log(email)
    try {
        const updatedProfile = await User.findOneAndUpdate(
            { email: email },
            req.body,
            {
                new: true
            }
        );

        console.log(updatedProfile)
        res.status(200).json({
            message: "Profile updated successfully",
            user: updatedProfile,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports = { SignupUser, LoginUser, UpadteProfile };