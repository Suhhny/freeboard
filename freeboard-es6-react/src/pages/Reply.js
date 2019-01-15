import React, { Component } from 'react';
import { Table, Form } from 'reactstrap';

class Reply extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment : ""
        }
    }
    render() {
        return(
            <div className="container" style={{marginTop: '5%'}}>
                <Table>
                <tbody>                    
                    <tr>
                        <td style={{width: '15%'}}>여포</td>                           
                        <td>탕탕탕</td>  
                    </tr>
                    <tr>
                        <td style={{width: '15%'}}>M24</td>                           
                        <td>찰칵</td>
                    </tr>                    
                </tbody>
                </Table>
                <hr/>
                    <Form inline>
                        <Label>{this.props.id}</Label>
                        <Input type="text" placeholder="댓글" onChange={(e) => { this.setState({comment: e.target.value})}}></Input>
                        <Button>댓글쓰기</Button>
                    </Form>
            </div>
        );
    }
}

export default Reply;
