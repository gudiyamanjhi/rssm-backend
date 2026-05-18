const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        // unique: true,
        // trim: true,
    },
    email: {
        type: String,
    },
    lastname: {
        type: String,
    },
    fathername: {
        type: String,
    },

    image: {
        data: Buffer,
        ContentType: String,
    },
    mobileno: String,
    address: String,
    duration: String,
    className: String,
    gender: String,
    mothername: String,
    Age: String,
    State: String,
    admissionDate: {
        type: Date,
        default: Date.now
    },
    admissionMonth: String
}, {
    timestamps: true
}
);

const StudentReg = mongoose.model("student", studentSchema);

module.exports = StudentReg;