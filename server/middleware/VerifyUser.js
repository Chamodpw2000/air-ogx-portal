import jwt from "jsonwebtoken"
import { UserModel } from "../models/User.js"
import dotenv from "dotenv"
import { AdminModel } from "../models/AdminModel.js";
dotenv.config({path:'../config/.env'})

export const VerifyUser = (req,res,next)=>{


    console.log("verifyUser");

    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET_KEY,async(err,payload)=>{
            try{
                if(err){
                    return res.status(401).json({error:"Unauthorized. "});
                }

                const user = await UserModel.findOne({_id:payload._id}).select(
                    "-password"
                );

                if(!user){

                    const user = await AdminModel.findOne({_id:payload._id}).select(
                        "-password"
                    );

                }

                req.user = user;
                next();
            } catch(err){
                return res.status(500).json({error: err.message});

            }
        });
        } else{
            return res.status(403).json({error: "Forbidden"});
        }

    };




    export const VerifyAdmin = (req,res,next)=>{
        console.log("verifyAdmin");
    
        const authHeader = req.headers.authorization;
        if(authHeader){
            const token = authHeader.split(" ")[1]
            jwt.verify(token,process.env.JWT_SECRET_KEY,async(err,payload)=>{
                try{
                    if(err){
                        return res.status(401).json({error:"Unauthorized. "});
                    }
    
                    const admin = await AdminModel.findOne({_id:payload._id}).select(
                        "-password"
                    );
    
                    req.admin = admin;
                    next();
                } catch(err){
                    return res.status(500).json({error: err.message});
    
                }
            });
            } else{
                return res.status(403).json({error: "Forbidden"});
            }
    
        };
    
