import * as actionsTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const storeResult = (state, action) => {
    return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2})});
};

const deleteResult = (state, action) => {
    const updateArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, {results: updateArray});      
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.STORE_RESULT : return storeResult(state, action);
        case actionsTypes.DELETE_RESULT : return deleteResult(state, action);
        default : return state;     

    }
}

export default reducer;