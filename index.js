const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const multer = require("multer")
const fs = require("fs");
const { buffer } = require("stream/consumers");
const { type } = require("os");
const { profile } = require("console");



// const { type, status } = require("express/lib/response");

// const { Schema } = require("mongoose")
const app = express();
app.use(express.json());
app.use(cors())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
        cb(null, file.fieldname + "-" + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })


main().catch((err) => console.log(err));


async function main() {
    await mongoose.connect("mongodb://gudiyamanjhi:774246@ac-h9k8edj-shard-00-00.mwbsomq.mongodb.net:27017,ac-h9k8edj-shard-00-01.mwbsomq.mongodb.net:27017,ac-h9k8edj-shard-00-02.mwbsomq.mongodb.net:27017/?ssl=true&replicaSet=atlas-m5hwj8-shard-0&authSource=admin&appName=Cluster0", {
        tls: true,
        serverSelectionTimeoutMS: 30000
    })
    console.log("Database connect");
};




app.use("/users", require("./routes/userRoutes"))
app.use("/student", upload.single('image'), require("./routes/studentRoutes"))
app.use("/teacher", upload.single('image'),require("./routes/teacherRoutes"))


// ****************************Apply***************************

// ***************************get all student**********************


// ***********************************put*********************





// ******************************************Delete***********************

// **********************************update****************************


app.get("", (req, res) => {
    res.json({ message: "sucess", status: true });

});

app.listen(8000, (req, res) => {
    console.log("server start");
})

