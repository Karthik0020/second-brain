import mongoose, {Schema, model} from "mongoose";
const contentTypes = ['image', 'video', 'article', 'audio']; // Extend as needed

mongoose.connect("mongodb://localhost:27017/second-brain")

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const tagSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true }
  });
  


const contentSchema = new mongoose.Schema({
    link: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

const linkSchema = new mongoose.Schema({
    hash: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true},

})

export const UserModel = model('User', userSchema)
export const Tag = mongoose.model('Tag', tagSchema);
export const contentModel = model('Content', contentSchema)
export const LInkMOdel = model('Link', linkSchema)