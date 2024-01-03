import mongoose, { model } from "mongoose";

const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);


//schemas


//admin schema
const AdminSchema = new mongoose.Schema({
    username:String,
    password: String,
    createdCourses: [String]
});

//user schema
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [String]
});

//course schema
const CourseSchema = new mongoose.Schema({
    id: String,
    title:String,
    description: String,
    price: Number
});


const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);


export {
    Admin,
    User,
    Course,
}