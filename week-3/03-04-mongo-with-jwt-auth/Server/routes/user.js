import { Router } from "express";
import { userMiddleware } from "../middlewares/user.js";
import { User, Course } from "../database/index.js";
import jwt from 'jsonwebtoken';

export const userRouter = Router();


//POST user/signup 
userRouter.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const purchasedCourses = [];

    const user = new User({
        username,
        password,
        purchasedCourses
    });

    user.save().then(() => {
        res.json({ msg: "user created successfully" });
    }).catch((error) => {
        console.log(error.message);
        res.status(500).json({ msg: "internal server error" });
    });

});


//POST user/login
userRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });
    if (!user) {
        console.log("user not found");
        res.status(500).json({ msg: "user not found" });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    res.json({ token });

});

//GET /users/courses
userRouter.get("/courses", userMiddleware, async (req, res) => {

    const courses = await Course.find();
    if (!courses) {
        console.log("could not get all courses");
        res.status(500).json({ msg: "could not get all courses due to internal server error" });
    }

    res.json({ courses });

});


//POST /users/courses/:courseId
userRouter.post("/courses/:courseId", userMiddleware, async (req, res) => {

    try {

        const { courseId } = req.params;
        const course = await Course.findOne({ id: courseId });
        if (!course) {
            console.log("course not found");
            res.status(400).json({ msg: "course not found!" });
        }

        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const username = decoded.username;

        const user = await User.findOne({username});
        if(!user){
            console.log("user not found");
            res.status(500).json({ msg: "user not found!!" });
        }

        user.purchasedCourses.push(courseId);
        await user.save();

        res.json({msg:"course purchased successfully"});

    } catch (error) {
        console.log("error in getting course by course id");
        res.status(500).json({ msg: "could not purchase course due to internal server error" });
    }


});


//GET /users/purchasedCourses
userRouter.get("/purchasedCourses", userMiddleware, async (req,res)=>{

    try{

        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const username = decoded.username;

        const user = await User.findOne({username});
        if(!user){
            console.log("user not found");
            res.status(500).json({ msg: "user not found!!" });
        }

        const coursePromises = user.purchasedCourses.map( async (courseId) =>{
            const course =  await Course.findOne({id:courseId});
            return course;
        });

        const purchasedCourses = await Promise.all(coursePromises);

        res.json({purchasedCourses});
        
    }catch(error){
        console.log("unable to get purchased courses " + error);
        res.status(500).json({msg:"unable to get purchased courses due to internal server error"});
    }

});