import React, { Component } from 'react';

class Main extends Component{
    render(){
        return(
            <div>
                <h1>WELCOME!</h1>
                <Link to = "/board/list"><h3>To the List</h3></Link>
            </div>
        );
    }
}

export default Main;