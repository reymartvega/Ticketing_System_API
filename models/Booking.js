import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId:{
        type:ObjectID
    },
    ticketId:{
        type:ObjectID
    },
    severity:{
        type:String,
        required:[true,"Severity is required"]
    },
    department:{
        type:String,
        required:[true,"Severity is required"]
    },
    description:{
        type:String,
        required:[true,"Severity is required"]
    },
    scheduledOn:{
        type:Date,
        default:new Date()
    }
})