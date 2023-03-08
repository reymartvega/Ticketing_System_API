import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"Fullname is required"]
    },
    username:{
        type:String,
        required:[true,"Username is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    department:{
        type:String,
        required:[true,"Department is required"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const User = mongoose.model("User", userSchema)
export default User