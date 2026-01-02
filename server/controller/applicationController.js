import { ApplicationModel } from "../models/Application.js";

const AddApplication = async (req,res)=>{


    console.log(req.user);
    const{pname,mobile,motivation,age,country,town,idd}=req.body;
    const{name,email,_id}=req.user;




    
  


    try{
        
        const newApplication = new ApplicationModel({
            
            project: pname,
            name : name,
            email: email,
            mobile: mobile,
            motivation: motivation,
            country: country,
            town: town,
            oppertunityId: idd,
            
            age: age,
            postedBy: _id
        });

        console.log(newApplication)
        console.log("innnnn");

        const result = await newApplication.save();



        console.log(result);


        return res.status(201).json({success:true,...result._doc});
    } catch(err){
        return res.status(500).json(err.message)
    }
    
};

const GetApplications = async (req,res)=>{

    try{
        const applications = await ApplicationModel.find({postedBy:req.user._id})
        return res.status(200).json({success:true,applications})
    } catch(err){
        return res.status(500).json({error:err.message})
    }




}



const GetAllApplications = async (req,res)=>{

    try{
        const applications = await ApplicationModel.find()
        return res.status(200).json({success:true,applications})
    } catch(err){
        return res.status(500).json({error:err.message})
    }

}


const Deleteapplication = async (req,res)=>{

   console.log("delete application");
    const {id} = req.params;
    
    if(!id){
        return res.status(401).json({error:"No Id specified"})
    }
    
        try{
            const application = await ApplicationModel.findOne({_id : id})

            if(!application){
                return res.status(401).json({error:"No Application Found"})
            }

            console.log(req.user)

            await ApplicationModel.findByIdAndDelete({_id : id})
           


            return res.status(200).json({success:true})
        } catch(err){
            return res.status(500).json({error:err.message})
        }
    
    }

export {AddApplication,GetApplications,Deleteapplication,GetAllApplications}
