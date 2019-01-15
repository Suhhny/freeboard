import express from 'express';
const router = express.Router();

import { Board } from '../../models';

router.post('/', async (req, res) => {

    const { title, content } = req.body;

    try{
        const board = new Board({
            title, 
            content
            // index: ,author: ,created_at: ,hit:
        });

        await board.save().catch(() => Promise.reject({ error: 0 }));

        return res.status(201).json({ success: true, board });

    }catch(err){
        res.status(500).json({ success: false, error: 0 });
    }
})

export default router;