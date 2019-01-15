import express from 'express';
let app = express();

import account from './account';
import post from './post';
import list from './list';

app.use('/account', account);
app.use('/post', post);
app.use('/list', list);

export default app;