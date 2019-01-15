import mongoose from 'mongoose';

let user = new mongoose.Schema({
    id: { type: String },
    email: { type : String },
    password: { type: String }
})

export default mongoose.model('user', user);