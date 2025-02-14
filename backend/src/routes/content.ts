import { Router } from "express"
import { contentModel, LInkMOdel, UserModel } from "../db"
import { userMiddleware } from "../middleware/user"
import { random } from "../util"

const JWT_PASSWORD = "12345"

 export const contentRouter = Router()

contentRouter.post("/", userMiddleware, async (req, res) => {

    const {link, type, title} = req.body;
    
    const content = await contentModel.create({
        title,
        link,
        type,
        //@ts-ignore
        userId: req.userId
    })
    res.json({
        title, link, type
    })
 })

contentRouter.get("/", userMiddleware, async (req,res) => {
    const contents = await contentModel.find({
        //@ts-ignore
        userId: req.userId
    }).populate("userId", "username")

    res.json({
        contents
    })
})

contentRouter.delete("/", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
     await contentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
     })
})

contentRouter.post("/share", userMiddleware, async (req, res) => {
    const share = req.body.share;

    if(share){

        const existingLink = await LInkMOdel.findOne({
            //@ts-ignore
            uaerId: req.userId
        })

        if(existingLink){
            res.json({
                hash: existingLink.hash
            })
            return;
        }

        const hash = random(10)

        const link = await LInkMOdel.create({
            //@ts-ignore
            userId: req.userId,
            hash
        })
        res.json({
            hash
        })        
    }else{
        await LInkMOdel.deleteOne({
            //@ts-ignore
            userId: req.userId
        })
        res.json({
            msg: "removed link"
        })
    }
})

contentRouter.get("/:sharelink", async (req, res) => {
    const hash = req.params.sharelink;

    const link = await LInkMOdel.findOne({
        hash
    })

    if(!link){
        res.status(411).json({
            msg: "link does noy exist"
        })
        return
    }

    const content = await contentModel.find({
        userId: link.userId 
    })

    const user = await UserModel.findOne({
        _id: link.userId
    })

    res.json({
        //@ts-ignore
        username: user.username,
        content: content
    })

})
module.exports = {
    contentRouter
 }