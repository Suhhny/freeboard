import express from 'express';
const router = express.Router();

import _delete from './delete';   //delete X
router.use('/delete', _delete);

import list from './list';
router.use('/list', list);

import write from './write';
router.use('/write', write);

import show from './show';
router.use('/show', show);

export default router;