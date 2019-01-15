import express from 'express';
let router = express();

import { user } from '../../model';

router.post('/login', (req, res) => {
    user.findOne({ id: req.body.loginId })
        .then((account) => {
            if(account === null) {
                return Promise.reject('idDeny');
            }else {
                if(req.body.loginPassword === acccount.password){
                    res.json({
                        loginPermission: 'pass',
                        id: account.id
                    })
                    req.session.account = {
                        id: account.id
                    }
                }else{
                    return Promise.reject('passwordDeny');
                }
            }
        })
        .catch((err) => {
            if(err === 'idDeny'){
                res.json({
                    loginPermission: 'idDeny'
                })
            }else if(err === 'passwordDeny'){
                res.json({
                    loginPermission: 'passwordDeny'
                })
            }
        })
})

/*
app.post('/login', (req, res) => {
    user.findOne({ id: req.body.loginId }, (err, account) => {
        if( account === null ) {
            console.log(req.body.loginId)
            res.json({
                loginPermission: 'idDeny'
            })
        } else {
            if( req.body.loginPassword === account.password ) {
                res.json({
                    loginPermission: 'pass',
                    id: account.id
                })
                req.session.account = {
                    id: account.id
                }
            } else {
                res.json({
                    loginPermission: 'passwordDeny'
                })
            }
        }
    })
})
*/

export default router;