import express from 'express';
let app = express();

import { board } from '../../model';

app.post('/editor/:id', (req, res) => {
    board.findOne({ _id: req.params.id })
        .then((writing) => {
            writing.title = req.body.title;
            writing.content = req.body.text;
            changeDate = new Date();
            writing.save().catch((err) =>{
                res.json({
                    success: false
                })
            })
        })
})

app.get('/editor/:id', (req, res) => {
    board.findOne({ _id: req.params.id })
        .then((writing) => {
            res.json({
                title: writing.title,
                content: writing.content
            })
        })
})

/*
app.post('/editor/:id', (req, res) => {
    board.findOne({ _id: req.params.id }, (err, writing) => {
        writing.title = req.body.title;
        writing.content = req.body.text;
        changeDate = new Date(),
        writing.save((err) => {
            console.log({
                sucess: true
            })
        })
    })
})
*/

export default app;