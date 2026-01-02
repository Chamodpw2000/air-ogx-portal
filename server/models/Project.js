import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
     country:{
        type: String,
        required: true
    },  
    town: {
        type: String,
        required: true  

    },
    provider:{
        type:String,
        required:true
    
    },description:{
        type:String,
        required:true
    
    },duration:{
        type:String,
        required:true
    
    },fee:{
        type:String,
        required:true
    
    }
    }
)

const ProjectModel = mongoose.model('project', ProjectSchema)
export{ProjectModel}