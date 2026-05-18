const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    fathername: String,
    mothername: String,
    experience: String,
    email: String,
    age: String,
    contact: String,
    Qualification: String,

    image: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const TeacherReg = mongoose.model("teacher", teacherSchema);

module.exports = TeacherReg;