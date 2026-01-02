import { ProjectModel } from "../models/Project.js";



const AddOpp = async (req, res) => {
    try {
        const {_id, name, town, country, provider, description, duration, fee} = req.body;
        
        if (_id) {
            // Update existing opportunity
            const updatedProject = await ProjectModel.findByIdAndUpdate(
                _id,
                {name, town, country, provider, description, duration, fee},
                {new: true}
            );
            return res.status(200).json({ success: true, ...updatedProject._doc });
        }
        
        // Create new opportunity
        const newProject = new ProjectModel({
            name, town, country, provider, description, duration, fee
        });
        
        const result = await newProject.save();
        return res.status(201).json({ success: true, ...result._doc });
    } catch (err) {
        return res.status(500).json(err.message);
    }
};



const  GetProject = async (req,res)=>{
    try{
        const project = await ProjectModel.find()
        
        return res.json(project)
        
    }catch(err) {
        
        return res.json(err)
    }
}


const GetProjectbyid = async (req,res)=>{
    const {id} = req.params;
    
    if(!id){
        return res.status(401).json({error:"No Id specified"})
    }
    
        try{
            const project = await ProjectModel.findOne({_id : id})
            return res.status(200).json({success:true,...project._doc})
        } catch(err){
            return res.status(500).json({error:err.message})
        }
    
    }

    const DeleteProject = async (req,res)=>{
        const {id} = req.params;
        if(!id){
            return res.status(401).json({error:"No Id specified"})
        }

        try{
            const project = await ProjectModel.findOne({_id : id})
            if(!project){
                return res.status(404).json({error:"No project found"})
            }
            await ProjectModel.deleteOne({_id:id})
            return res.status(200).json({success:true})
        }catch(err){
            return res.status(500).json({error:err.message})
        }
    }










export {AddOpp,GetProject,GetProjectbyid,DeleteProject}


