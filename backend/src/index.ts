import  express  from "express";
import { userRouter } from "./routes/user"
import { contentRouter } from "./routes/content"
import { UserModel } from "./db";
import cors from "cors"

const app = express();
app.use(express.json())
app.use(cors())

app.use('/api/v1/user', userRouter)
app.use('/api/v1/content', contentRouter)


app.listen(3000);
