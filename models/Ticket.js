import mongoose from "mongoose"

const ticketSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    department:{
        type:String,
        required:[true,"Department is required"]
    },
    isActive:{
        type:Boolean,
        default:true
    },
})