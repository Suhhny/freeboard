import express from 'express';
let router = express();

import register from './register';
import login from './login';

router.use('/register', register);
router.use('/login', login);

export default router;