import express from 'express';
let app = express();

import { board, reply } from '../../model';

app.get('/post/:id', (req, res) => {
    board.findOne({ _id: req.params.id })
        .then((writing) => {
            id = writing.boardId
            res.json({
                titleShow: writing.title,
                writerShow: writing.writer,
                textShow: writing.content,
                dateShow: writing.date,
                changedDateShow: writing.changedDate,
                watchShow: writing.watch,
                likeyShow: writing.show
            })
            reply.find({ boardId: id})
                .then((comment) => {
                    res.json({
                        commentList: comment
                    })
                })
        })
})