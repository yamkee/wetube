import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl : {
        type : String,
        required : "File Url is required"
    },
    title : {
        type : String,
        required : "Title is requried"
    },
    description : String,
    view :{
        type : Number,
        default : 0
    },
    createdAt :{
        type : Date,
        default : Date.now
    }
});

const model = new mongoose.model("Video", VideoSchema);
export default model;