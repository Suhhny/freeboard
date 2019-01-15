import React, { Component } from 'react';
import { FormGroup, Label, Input, Form, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Reply from './Reply';

export default class Show extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="container" style={{marginTop: '1%'}}>
                <h2>제목</h2>
                <div className="container">
                    <h6 className="float-left">작성자</h6>
                    <h6 className="float-right">작성일자</h6>
                </div>
                    <br/>
                    <hr/>
                    <p>{this.props.id}</p>
                    <hr/>
                <div className="container">
                    <Link to="/"><Button className="btn btn-primary float-right" size="sm">돌아가기</Button></Link>
                    <Link to="/"><Button className="btn btn-danger float-right" size="sm" style={{marginRight: '1%'}}>삭제</Button></Link>
                    <Link to="/Editor/:id"><Button className="btn btn-warning float-right" size="sm" style={{marginRight: '1%'}}>수정</Button></Link>
                </div>
                <hr/>
                <Reply/>
            </div>   
        );
    }
}