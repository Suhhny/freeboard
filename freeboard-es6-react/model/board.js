import mongoose from 'mongoose';

let board = new mongoose.Schema({
    title : { type: String },
    writer : { type: String },
    boardId : { type : Number },
    content : { type : String },
    date : { type : String },
    changeate : { type : String },
    watch : { type : Number },
    likey : { type: Number }
})

export default mongoose.model('board', board);