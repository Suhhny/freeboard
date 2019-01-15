import express from 'express';
import path from 'path';
let app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

import session from 'express-session'
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

import mongoose from 'mongoose';
mongoose.connect('mongodb://admin:master1@ds117469.mlab.com:17469/wingtree');
import routes from './routes';
app.use('/api', routes);

app.all('*', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname + '/../public/index.html'));
});

app.listen(3000);