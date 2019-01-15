import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Bar from './Bar';
import { List, Editor, Show } from './pages';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginPermission: '',
            id: '',
            password: ''
        }
        this.requestLogin = this.requestLogin.bind(this)
        this.logout = this.logout.bind(this)
    }
    
    requestLogin(loginIdIn, loginPasswordIn) {
        axios.post('/login', {
            loginId: loginIdIn,
            loginPassword: loginPasswordIn
        }).then((res) => {
            this.setState({ loginPermission: res.data.loginPermission, id: loginIdIn })
            console.log(res)
            if ( this.state.loginPermission == 'passwordDeny' ){
                window.alert("비밀번호를 확인해주세요.")
            } else if ( this.state.loginPermission == 'idDeny' ) {
                window.alert("아이디를 확인해주세요.")
            } else {
                window.alert("로그인되었습니다.")
            }
        }).catch((res) => {
            console.log(res)
        })
    }

    

    logout() {
        this.setState({ id: '' });
        window.alert("로그아웃 되었습니다.")
    }

    render() {
        return (
            <div>
                <Bar id={ this.state.id } permission={ this.state.loginPermission } requestLogin={ this.requestLogin } logout={ this.logout }/>
                <Switch>
                    <Route exact path="/" render={(props) => <List {...props}/>}/>
                    <Route path="/show/:id" component={Show}/>
                </Switch>
                <Switch>
                    <Route path="/Editor/:id" render={(props) => <Editor {...props} type={"수정"} writer={ this.state.id }/>}/>
                    <Route path="/Editor" render={(props) => <Editor {...props} type={"작성"} writer={this.state.id}/>}/>
                </Switch>
            </div>
        );
        
    }
}