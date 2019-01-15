import mongoose from 'mongoose';

let reply = new mongoose.Schema({
    superBoard : { type: Number },
    writer : { type: String },
    time : { type: String }
})

export default mongoose.model('reply', reply);