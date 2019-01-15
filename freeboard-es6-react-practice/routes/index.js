import express from 'express';
const router = express.Router();

// import auth from './auth';
// router.use('/auth', auth);

import board from './board';
router.use('/board', board);

export default router;
