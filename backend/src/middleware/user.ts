import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
const JWT_PASSWORD = "12345"

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"]
    const decoded = Jwt.verify(header as string, JWT_PASSWORD) 

    if(decoded){
        //@ts-ignore
        req.userId = decoded.id
        next()
    }else{
        res.status(403).json({
            msg: "you are not signed in"
        })
    }
}