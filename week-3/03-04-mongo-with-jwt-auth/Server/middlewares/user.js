import { User } from "../database/index.js";
import jwt from 'jsonwebtoken';

export function userMiddleware(req,res,next){
    //verify the jwt token
    try {
        const token = req.headers.authorization;
        const JWT_SECRET = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, JWT_SECRET);

        next();

    } catch (error) {
        console.log("failed to verify the jwt");
        res.status(411).json({msg:"invalid jwt token"});
    }
}


