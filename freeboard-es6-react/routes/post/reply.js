import express from 'express';
let app = express();

import { reply, board } from '../../model';

app.post('/reply/:id', (req, res) => {
    board.findOne({ _id: req.parmas })
        .then((board) => {
            let comment = new reply({
                superBoard: board.boardId,
                writer: req.body.writer,
                time: new Date()
            })
            comment.save().catch((err) => {
                res.json({
                    success: false
                })
            })
        })
})

export default app;