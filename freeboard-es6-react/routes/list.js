import express from 'express';
let app = express();

import { board } from '../../model'

app.get('/', (req,res) => {
    board.find()
        .then((writing) => {
            res.json({
                wirtingList: writing
            })
        })
        .catch((err) => {
            res.json({
                success: false
            })
        })
})

export default app;