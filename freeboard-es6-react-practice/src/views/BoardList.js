import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BoardList extends Component{

    componentDidMount(){
        this.props.onRequest();
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>TITLE</th>
                            <th>CONTENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.title}</td>
                            <td>{this.props.content}</td>
                        </tr>
                    </tbody>
                </table>

                <Link to = "/board/write"><h3>Write</h3></Link>
            </div>
        );
    }
}

BoardList.propTypes = {
    onRequest: PropTypes.func,
    list: PropTypes.array
};

BoardList.defaultProps = {
    onRequest: undefined,
    list: undefined
};

const mapStateToProps = (state) => {
    return {
        list: state.board.get('list').toJS()
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequest: () => {
            dispatch(requestBoardList());
        }
    };
}
;
export default connect(mapStateToProps, mapDispatchToProps)(BoardList);