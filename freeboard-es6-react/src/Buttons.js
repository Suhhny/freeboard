import React, { Component } from 'react';
import { Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class Buttons extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginModal: false,
            registerModal: false,
            registerId: "",
            registerEmail: "",
            registerPassword: "",
            registerPermission: "",
            loginId: "",
            loginPassword: ""
        }
        this.registerToggle = this.registerToggle.bind(this);
        this.loginToggle = this.loginToggle.bind(this);
        this.requestRegister = this.requestRegister.bind(this);
    }

    loginToggle() { //login Modal Open toggle
        this.setState(() => ({ loginModal: !this.state.loginModal }));
    }

    registerToggle() { //Register Modal Open toggle
        this.setState(() => ({ registerModal: !this.state.registerModal }));
    }

    requestRegister() {
        axios.post('/register', {
            registerId: this.state.registerId,
            registerEmail: this.state.registerEmail,
            registerPassword: this.state.registerPassword
        }).then((res) => {
            this.setState(() => ({ registerModal: !this.state.registerModal, registerPermission: res.data.registerPermission }));
            console.log(this.state.registerId, this.state.registerPermission)
            if ( this.state.registerPermission == 'deny' ){
                window.alert("이미 있는 아이디입니다.")
            } else {
                window.alert("가입되었습니다.")
            }
        }).catch((res) => {
            console.log(res)
        })   
    }
    
    loginClick(e) {
        this.props.requestLogin(this.state.loginId, this.state.loginPassword);
        this.setState({loginModal: !this.state.loginModal});
    }

    render() {
        return(
            <Nav style={{marginRight: '4%'}}>
                <NavItem style={{color: 'white'}}>
                    <Button color="secondary" style={{marginRight:'10px'}} onClick={this.loginToggle}>로그인</Button> {/* Open Login Modal */}
                    <Modal isOpen={this.state.loginModal} toggle={this.loginToggle} className="login">
                        <ModalHeader toggle={this.loginToggle}>로그인</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label>아이디</Label>
                                <Input type="id" onChange={(e) => { this.setState({loginId: e.target.value})}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>비밀번호</Label>
                                <Input type="password" onChange={(e) => {this.setState({loginPassword: e.target.value})}}/>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={ (e) => this.loginClick(e) }>로그인</Button>
                            <Button color="secondary" onClick={this.loginToggle}>취소</Button>
                        </ModalFooter>
                    </Modal>
                </NavItem>
                <NavItem style={{color: 'white'}}>
                    <Button color="secondary" onClick={this.registerToggle}>회원가입</Button> {/* Open Register  Modal*/}
                    <Modal isOpen={this.state.registerModal} toggle={this.registerToggle} className="register">
                        <ModalHeader toggle={this.registerToggle}>회원가입</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label>아이디</Label>
                                <Input type="id" onChange={(e) => {this.setState({registerId: e.target.value})}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>이메일</Label>
                                <Input type="email" onChange={(e) => {this.setState({registerEmail: e.target.value})}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>비밀번호</Label>
                                <Input type="password" onChange={(e) => {this.setState({registerPassword: e.target.value})}}/>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.requestRegister}>회원가입</Button>
                            <Button color="secondary" onClick={this.registerToggle}>취소</Button>
                        </ModalFooter>
                    </Modal>
                </NavItem>
            </Nav>
        )  
    }
}

export default Buttons;