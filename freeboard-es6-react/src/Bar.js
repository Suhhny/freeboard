import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';

/*
Bar of Top of the Page
*/

export default class Bar extends Component {
    constructor(props) {
        super(props);
    }

    accountButton(props){
        const account = props.id;
        if ( account != '' ) {
            return(
                <Nav style={{marginRight: '4%'}}>
                    <h5 style={{fontWeight: 'bold', marginBottom: '0px', color: 'white', marginTop: '10px'}}>안녕하세요, { String(account) } 님</h5>
                    <Button color="secondary" style={{marginLeft: '10px'}} onClick={ props.logout }>로그아웃</Button>
                </Nav>
            );    
        } else {
            return(
                <Buttons id = { props.id } permission = { props.permission }  requestLogin={ props.requestLogin }/>
            )
        }
    }

    render() {
        return (
            <Navbar color="dark">
                <Link to='/' style={{textDecoration: 'none', marginLeft: '5%'}}><h2 style={{color: 'white', marginBottom:'0px', width: '300px'}}>자유게시판</h2></Link>
                <this.accountButton id={ this.props.id } permission={ this.props.permission } requestLogin={ this.props.requestLogin } logout={ this.props.logout }/>
            </Navbar>
        );
    }
}