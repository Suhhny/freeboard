import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { requestBoardData, requestBoardDataClear, requestBoardDelete } from '../modules/board'; 

class BoardShow extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onRequest();
    }

    componentWillUnMount(){
        this.props.onClear();
    }

    render(){
        return(
            <div>
                <h2>TITLE: </h2>
                <h4>{this.props.title}</h4>
                <h2>CONTENT: </h2>
                <p>{this.props.content}</p>
                <Link to = '/board/list'><h3>To The List</h3></Link>
                <a onClick = {this.props.onDelete}><h3>DELETE!</h3></a>
            </div>
        );
    }
}

BoardShow.propTypes = {
    _id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
};

BoardShow.defaultProps = {
    _id: null,
    title: null,
    content: null
};

const mapStateToProps = (state) => {
    let board = state.board.get('board').toJS();
    return {
        _id: board._id,
        title: board.title,
        content: board.content
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequest: () => {
            dispatch(requestBoardData());
        },

        onClear: () => {
            dispatch(requestBoardDataClear());
        },

        onDelete: () => {
            dispatch(requestBoardDelete());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);