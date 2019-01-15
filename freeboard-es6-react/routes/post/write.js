import express from 'express';
let app = express();

import { board } from '../../model';

app.post('/editor', (req, res) => {
    board.find()
        .then((id) => {
            let writing = new board({
                title: req.body.title,
                writer: req.body.writer,
                boardId: 1 + id.length,
                content: req.body.text,
                date: new Date(),
                changed_date: 0,
                watch: 0,
                likey: 0,
            });
            writing.save().catch((err) => {
                res.json({
                    success: false
                })
            })
        })
})

/*
app.post('/editor', (req, res) => {
    board.find({}, (err, id) => {
        var writing = new board({
            title: req.body.title,
            writer: req.body.writer,
            boardId: 1 + id.length,
            content: req.body.text,
            date: new Date(),
            changed_date: 0,
            watch: 0,
            likey: 0,
        });
        writing.save((err) => {
            res.json({
                success: true
            })
        })
    })
})
*/

export default app;