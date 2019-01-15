import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestBoardCreate } from '../modules/board';

class BoardCreate extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: ""
        };

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(){
        let boardData = new FormData();

        boardData.append('title', this.state.title );
        boardData.append('content', this.state.content );

        this.setState({
            title: "",
            content: ""
        });

        this.props.onSubmit(boardData);
    }

    render(){
        return(
            <div>
                <div>
                    <textarea id="title" onChange={ (e) => this.setState({ title: e.target.value }) } value={ this.state.title } required></textarea>
                    <textarea id="content" rows="10" onChange={ (e) => this.setState({ content: e.target.value }) } value={ this.state.content } required></textarea>
                </div>
                <button type="submit" onClick={ this._handleSubmit }>SUBMIT</button>
            </div>
        );
    }
}

BoardCreate.propTypes = {
    onSubmit: PropTypes.func
}

BoardCreate.defaultProps = {
    onSubmit: undefined
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (boardData) => {
            dispatch(requestBoardCreate(boardData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardCreate);