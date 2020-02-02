import * as actionsTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.STORE_RESULT :
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
            //results: state.results.concat({id: new Date(), value: action.result * 2})
        case actionsTypes.DELETE_RESULT :
           // const id = 2;
           // const newArray = [...state.results];  // one way removing element of without mutating the orginal array 
           // newArray.splice(id, 1); 
           // another way 
           const updateArray = state.results.filter(result => result.id !== action.resultElId);
           return updateObject(state, {results: updateArray});      
        default:
            return state;     

    }
}

export default reducer;