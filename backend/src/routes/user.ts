import { Router } from "express"
import { UserModel } from "../db";
import  Jwt  from "jsonwebtoken";

export const userRouter = Router();

const JWT_PASSWORD = "12345"

userRouter.post("/signup" , (req, res) => {
    const {username, password} = req.body;
        const user = UserModel.create({
            username,
            password
        })
    
        res.json({
            msg: "user signup completed"
        })
})

userRouter.post("/signin" , async (req, res) => {
    const {username, password} = req.body;

    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = Jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)

        res.json({
            token
        })
    }else{
        res.json({
            msg: "user does not exist"
        })
    }
})


