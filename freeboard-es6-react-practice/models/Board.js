import mongoose from 'mongoose';

const Board = new mongoose.Schema({
    index: {type: Number},
    title: {type: String},
    author: {type: String},
    content: {type: String},
    created_at: {type: String},
    hits: {type: Number, default: 0}
});

export default mongoose.model('board', Board);
