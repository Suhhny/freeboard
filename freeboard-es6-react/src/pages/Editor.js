import React, { Component } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { set } from 'mongoose';

export default class Editor extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: this.props.type,
            inputTitle: '',
            inputText: ''            
        }
    }

    render() {
        return (
            <div className="container" style={{marginTop: '1%'}}>
                <FormGroup>
                    <Label>제목</Label>
                    <Input type="text" placeholder="제목" onChange={(e) => { this.setState({ inputTitle: e.target.value })}}/>
                </FormGroup>
                <FormGroup>
                    <Label>작성자</Label>
                    <Input type="text" placeholder={ this.props.writer } readOnly/>
                </FormGroup>
                <FormGroup>
                    <Label for="Text">내용</Label>
                    <Input type="textarea" name="text" id="Text" rows="20" onChange={(e) => { this.setState({ inputText: e.target.value })}}/>
                </FormGroup>
                <div style={{textAlign:"right"}}>
                    <Link to="/"><Button color="secondary" style={{marginRight: '1%'}}>돌아가기</Button></Link>
                    <Button color="secondary">{this.state.page}</Button>
                </div>
            </div>
        );
    }
}