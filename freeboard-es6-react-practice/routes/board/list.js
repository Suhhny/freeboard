import express from 'express';
const router = express.Router();

import { Board } from '../../models';

router.get('/', async (req, res) => {
    try{
        const list = await Board.find({})
                                .sort({ _id: -1 })
                                .catch(() => Promise.reject({ error: 0 }));

        return res.status(200).json({ success: true, list });

    }catch(err){
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;