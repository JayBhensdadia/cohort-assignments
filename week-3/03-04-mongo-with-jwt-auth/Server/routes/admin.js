import { Router } from "express";
import { adminMiddleware } from "../middlewares/admin.js";
import { Admin, Course } from "../database/index.js";
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

export const adminRouter = Router();


//admin signup
adminRouter.post("/signup", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const createdCourses = [];
    const admin = new Admin({
        username,
        password,
        createdCourses
    });

    admin.save().then(() => {
        res.json({ msg: "admin created successfully" });
    }).catch((error) => {
        console.log(error.message);
        res.status(500).json({ msg: "internal server error" });
    });
});


// admin/login
adminRouter.post("/login", (req, res) => {
    const { username, password } = req.body;

    Admin.findOne({ username, password }).then(() => {

        const token = jwt.sign({ username }, process.env.JWT_SECRET);

        res.json({ token });

    }).catch((error) => {
        console.log("admin not found!!");
        res.status(400).json({ msg: "admin not found" });
    });
});


// POST /admin/courses
adminRouter.post("/courses", adminMiddleware, async (req, res) => {

    try {

        const { title, description, price } = req.body;
        const courseId = uuidv4();
        const course = new Course({
            id: courseId,
            title,
            description,
            price
        });



        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const username = decoded.username;

        const admin = await Admin.findOne({username});
    
        if(!admin){
            console.log("admin not found");
            res.status(500).json({msg:"internal server error"});
        }

        admin.createdCourses.push(courseId);
        await admin.save();

        await course.save();

        res.json({ msg: "course created successfully" });



    } catch (error) {
        console.error("Error in saving new course: ", error);
        res.status(500).json({ msg: "Failed to create the course" });
    }




    

});



// GET admin/courses
adminRouter.get("/courses", adminMiddleware, async (req,res)=>{

    try{

        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const username = decoded.username;

        const admin = await Admin.findOne({username});
    
        if(!admin){
            console.log("admin not found");
            res.status(500).json({msg:"internal server error"});
        }

        
        const coursePromises = admin.createdCourses.map(async (courseId)=>{

            const course =  await Course.findOne({id:courseId});
            return course;

        });

        const courses = await Promise.all(coursePromises);

        res.json({createdCourses: courses});

    }catch(error){
        console.log("unable to get created courses " + error);
        res.status(500).json({msg:"unable to get created courses due to internal server error"});
    }

});

