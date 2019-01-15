import React, { Component } from 'react';
import { withRouter, Route, Switch, Router } from 'react-router-dom';

import { Main, BoardList } from './views';

class App extends Component {

    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path = '/' component = { Main }/>
                    <Route path = '/board' component = { BoardList } />
                </Switch>
            </Router>
        );
    }
}

export default App;