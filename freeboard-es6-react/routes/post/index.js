import express from 'express';
let app = express();

import change from './change';
import write from './write';
import reply from './reply';

app.use('/change', change);
app.use('/write', write);
app.use('/reply', reply);

export default app;