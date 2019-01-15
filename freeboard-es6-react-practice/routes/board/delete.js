import express from 'express';
const router = express.Router();

import { Board } from '../../models';

router.get('/', async (req, res) => {
    try{
        const oneBoard = await Board.findOne({ _id: req.query.id }).catch(() => Promise.reject({ error: 0 }));  //cannot find oneBoard

        if(!oneBoard){
            res.status(404).json({ success: false, error: 1 });   // no board
        }

        await Board.deleteOne({ _id: req.query.id }).catch(() => Promise.reject({ error: 2 }));  //cannot delete oneBoard

        return res.status(204).json();

    }catch(err){
        res.status(500).json({ success: false, error: 0 });
    }
});

export default router;