import express from 'express';
let app = express();

import { user } from '../../model';

app.post('/register', (req, res) => {
    user.findOne({ id: req.body.regiseterId })
        .then((account) => {
            if(account === null){
                let account = new user({
                    id: req.body.regiseterId,
                    password: req.body.registerPassword,
                    email: req.body.registerEmail
                })
                account.save().catch((err) => {
                    res.json({
                        registerPermission: 'deny'
                    })
                })
                res.json({
                    registerPermission: 'pass'
                })
            }else{
                return Promise.reject('deny');
            }
        })
        .catch((err) => {
            if(err === 'deny'){
                res.json({
                    registerPermission: 'deny'
                })
            }
        })
})

/*
app.post('/register', (req, res) => {
    user.findOne({ id: req.body.registerId }, (err, account) => {
        if ( account === null ){
            var account = new user({
                id : req.body.registerId,
                password : req.body.registerPassword,
                email : req.body.registerEmail
            })
            account.save((err) => {
                req.session.account = {
                    id: account.id,
                    password: account.password,
                    email: account.email
                }
            })
            res.json({
                registerPermission: 'pass'
            })
        } else {
            res.json({
                registerPermission: 'deny'
            })
        }
    })
})
 */

export default app;