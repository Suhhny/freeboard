import express from 'express';
const router = express.Router();
import { Board } from '../../models';

router.get('/', async (req, res) => {
    
    try{
        const oneBoard = await Board.findOne({ _id: req.query.id }).catch( () => Promise.reject({ error: 0 }))

        if(!oneBoard){
            res.status(404).json({ success: false, error: 1 });   // no board
        }

        return res.status(200).json({ success: true, oneBoard });

    }catch(err){
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;