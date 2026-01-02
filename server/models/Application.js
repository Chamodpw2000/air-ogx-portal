import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({

    project:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
       
    },  
    mobile: {
        type: String,
        required: true,
        
 

    },
    motivation: {
        type: String,
 

    },

    age:{
        type: String,
        required: true
    },

    postedBy: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"

    },
    country:{
        type: String,

    },
    town:{
        type: String,

    },
    oppertunityId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref : "project",

    },
    
    
    


    dateapp: {
        type: Date,
        default: Date.now

    }


}   
)

const ApplicationModel = mongoose.model('application', ApplicationSchema)
export{ApplicationModel}