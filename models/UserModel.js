const mongoose = require("mongoose")

const userschema = new mongoose.Schema({

    username: {
        type: String,
    },

    email: {
        type: String,
    },

    name: {
        type: String,
    },
    password: {
        type: String
    },
    phoneno: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },

})

const User = mongoose.model("user", userschema);
module.exports=User;
