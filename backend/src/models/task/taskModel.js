import mongoose from "mongoose";

const TaskSchema= new mongoose.Schema({
title:{
    type: String,
    required: [true,"Please provide a title"],
    unique: true,
},
  
  descripation: {
    type: String,
    default: "No description",
  },

    dueDate: {
        type:Date,
        default: Date.now(),
    },

    status:{
        type: String,
        enum:["active", "inactive"],
        default: "active",
    },

    completed:{
        type: String,
        default:false,
    },

    priority:{
        type: String,
        enum:["low","medium" ,"high"],
        required:true,
    }
}, 
 {timestamps:true}
);

const TaskModel = mongoose.model("Task",TaskSchema);

export default TaskModel;
