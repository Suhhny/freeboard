import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import axios from 'axios';


const BOARDCREATE = "/board/BOARDCREATE";
const BOARDCREATEERROR = "/board/BOARDCREATEERROR";

const boardCreate = createAction(BOARDCREATE);
const boardCreateError = createAction(BOARDCREATEERROR);

export const requestBoardCreate = (boardData) => {
    return async (dispatch) => {
        try{
            let res = await axios.post('/api/board/write', { boardData });
            
            // await fetch('/api/board/write', {
            //                     'method': 'POST',
            //                     'headers': {},
            //                     'body': boardData
            //                     });
                                
            res = await res.json();  // fetch에만 필요, axios에서는 안쓰고 board: res.data.board로 접근 가능

            if(res.success){
                alert("submit completed");
                dispatch(boardCreate({ board: res.board }));
            }else{
                alert("no...");
                dispatch(boardCreateError());
            }

        }catch(err){
            console.log(err);
            alert("no...");
            dispatch(boardCreateError());
        }
    }
}

const BOARDLIST = "/board/BOARDLIST";
const BOARDLISTERROR = "/board/BOARDLISTERROR";

const boardList = createAction(BOARDLIST);
const boardListError = createAction(BOARDLISTERROR);

export const requestBoardList = () => {
    return async (dispatch) => {
        try{
            let res = await axios.get('/api/board/list');

            if(res.data.success){
                dispatch(boardList({ list: res.data.list }));
            }else{
                alert("i don't want to load data...");
                dispatch(boardListError());
            }
        }catch(err){
            console.log(err);
            alert("i don't want to load data...");
            dispatch(boardListError());
        }
    }
}

const BOARDDATA = "/board/BOARDDATA";
const BOARDDATAERROR = "/board/BOARDDATAERROR";

const boardData = createAction(BOARDDATA);
const boardDataError = createAction(BOARDDATAERROR);

export const requestBoardData = () => {
    return async (dispatch) => {
        try{
            let res = await axios.get(`/api/board/show?id=${id}`);

            if(res.data.success){
                dispatch(boardData({ board: res.data.oneBoard }));
            }else{
                alert("can't load data..");
                dispatch(boardDataError());
            }
        }catch(err){
            console.log(err);
            alert("can't load data..");
            dispatch(boardDataError());
        }
    }
}

const BOARDDATACLEAR = "/board/BOARDDATACLEAR";
export const requestBoardDataClear = createAction(BOARDDATACLEAR);


const BOARDDELETE = "/board/BOARDDELETE";
const BOARDDELETEERROR = "/board/BOARDDELETEERROR";

const boardDelete = createAction(BOARDDELETE);
const boardDeleteError = createAction(BOARDDELETEERROR);

export const requestBoardDelete = () => {
    return async (dispatch) => {
        try{
            let res = await axios.delete(`/api/board/delete?id=${id}`);

            alert("delete complete");
            dispatch(boardDelete({ id }));
        }catch(err){
            console.log(err);
            alert("please don't delete....");
            dispatch(boardDeleteError());
        }
    }
}


const initialState = Map({
    list: List([]),
    board: Map({
        _id: null,
        title: null,
        content: null
    })
});

const reducer = handleActions({

    [BOARDCREATE]: (state, action) => {
        return state.set('list', state.get('list').insert(0, action.payload.board));
    },

    [BOARDCREATEERROR]: (state, action) => {
        return state;
    },

    [BOARDLIST]: (state, action) => {
        return state.set('list', List(action.payload.list)); 
    },

    [BOARDLISTERROR]: (state, action) => {
        return initialState;
    },

    [BOARDDELETE]: (state, action) => {
        let newState = state.get('list').toJS().filter((obj) => {
            return obj._id !== action.payload.id
        });
        return state.set('list', List(newState));
    },

    [BOARDDELETEERROR]: (state, action) => {
        return state;
    },

    [BOARDDATA]: (state, action) => {
        return state.setIn(['board', '_id'], action.payload.oneBoard._id)
                    .setIn(['board', 'title'], action.payload.oneBoard.title)
                    .setIn(['board', 'content'], action.payload.oneBoard.content)
    },

    [BOARDDATAERROR]: (state, action) => {
        return state;
    },

    [BOARDDATACLEAR]: (state, action) => {
        return state.setIn(['board', '_id'], null)
                    .setIn(['board', 'title'], null)
                    .setIn(['board', 'content'], null)
    }


}, initialState);

export default reducer;