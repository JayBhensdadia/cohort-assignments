
import express from 'express';
import dotenv from 'dotenv/config';
import { adminRouter } from "./routes/admin.js";
import { userRouter } from "./routes/user.js";


const app = express();
const PORT = process.env.PORT || 6000;


app.use(express.json());
app.use("/admin",adminRouter);
app.use("/user",userRouter);



app.listen(PORT, ()=>{
    console.log("server listning on port " + PORT);
});




