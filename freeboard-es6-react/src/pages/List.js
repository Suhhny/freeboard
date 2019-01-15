import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

/*

List of main board

*/

export default class List extends Component {
    render() {
        return (
            <div className="container" style={{marginTop: '1%'}}>
                <Table striped>
                    <thead>
                        <tr>
                            <th></th>
                            <th style={{width: '55%'}}>제목</th>
                            <th style={{width: '12%', textAlign: 'center'}}>글쓴이</th>
                            <th style={{width: '12%', textAlign: 'center'}}>작성시간</th>
                            <th style={{width: '8%', textAlign: 'center'}}>좋아요</th>
                            <th style={{width: '8%', textAlign: 'center'}}>댓글 수</th>
                        </tr>
                    </thead>                    
                    <tbody>                    
                        <tr>
                            <th scope="row" style={{textAlign: 'center'}}>1</th>
                            <Link to="/Show/:id">
                            <td style={{color: 'black'}}>안녕하세요</td>
                            </Link>                            
                            <td style={{textAlign: 'center'}}>신태용</td>
                            <td style={{textAlign: 'center'}}>10시</td>
                            <td style={{textAlign: 'center'}}>2</td>
                            <td style={{textAlign: 'center'}}>3</td>
                        </tr>                       
                    </tbody>                   
                </Table>
                <div style={{textAlign:"right"}}>
                <Link to="/Editor"><Button color="secondary">글쓰기</Button></Link>
                </div>
            </div>
        );
    }


}