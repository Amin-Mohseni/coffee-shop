import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true ,
    },
    phone : {
        type : String,
        required : true ,
    },
    email : {
        type : String,
        required : false ,
    },
    password : {
        type : String,
        required : true ,
    },
    role : {
        type : String,
        required : "User" ,
    },

    refreshToken : String,
})

const model = mongoose.models.User || mongoose.model("User" , schema)

export default model