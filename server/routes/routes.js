import express from 'express';
import { AdminLogin, AdminRegister, Auth, AuthAdmin, EditProfile, GetProfile, Login, Register } from '../controller/userController.js';
const router = express.Router()
import {body} from "express-validator"
import { VerifyAdmin, VerifyUser } from '../middleware/VerifyUser.js';
import { AddOpp, DeleteProject, GetProject, GetProjectbyid } from '../controller/projectController.js';
import { AddApplication, Deleteapplication, GetAllApplications, GetApplications } from '../controller/applicationController.js';






router.post('/register',[
    body("name").trim().notEmpty().withMessage("Name Should Not be Empty"),
    body("email").trim().notEmpty().withMessage("Email Should Not be Empty")
    .isEmail().withMessage("Invalid Email ! ! ! "),
    body("password").trim().notEmpty().withMessage("Password Should Not be Empty")
    .isLength({min:5,max:30}).withMessage("Password Length be 5-30")],Register
)

router.post('/login',[
    
    body("email").trim().notEmpty().withMessage("Email Should Not be Empty")
    .isEmail().withMessage("Invalid Email ! ! ! "),
    body("password").trim().notEmpty().withMessage("Password Should Not be Empty")
    .isLength({min:5,max:30}).withMessage("Password Length be 5-30")],Login
)
router.post('/registeradmin',[
    body("name").trim().notEmpty().withMessage("Name Should Not be Empty"),
    body("email").trim().notEmpty().withMessage("Email Should Not be Empty")
    .isEmail().withMessage("Invalid Email ! ! ! "),
    body("password").trim().notEmpty().withMessage("Password Should Not be Empty")
    .isLength({min:5,max:30}).withMessage("Password Length be 5-30")],AdminRegister
)



router.post('/loginadmin',[
    
    body("email").trim().notEmpty().withMessage("Email Should Not be Empty")
    .isEmail().withMessage("Invalid Email ! ! ! "),
    body("password").trim().notEmpty().withMessage("Password Should Not be Empty")
    .isLength({min:5,max:30}).withMessage("Password Length be 5-30")],AdminLogin
)
router.get("/verifyadmin",VerifyAdmin ,AuthAdmin)




router.get("/verify",VerifyUser ,Auth)

router.get('/getprofile',VerifyUser,GetProfile)

router.put('/editprofile',VerifyUser,EditProfile)

router.post('/addopp',AddOpp)

router.get('/getprojects',GetProject)

router.get('/getproject/:id',GetProjectbyid)

router.post('/apply',VerifyUser,AddApplication)

router.get('/getapplications',VerifyUser,GetApplications)

router.delete('/deleteapplication/:id',VerifyUser,Deleteapplication)

router.get("/getallapplications",VerifyUser ,GetAllApplications)

router.delete("/deleteproject/:id",VerifyUser ,DeleteProject)













export {router as Router}