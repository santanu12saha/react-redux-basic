import * as actionsTypes from '../actions/actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.INCREMENT :
            const newState = Object.assign({}, state); //ES 5
            newState.counter = state.counter + 1;
            return newState; 
        case actionsTypes.DECREMENT :
            return {
                ...state,  // ES 6/7
                counter: state.counter - 1
            }
        case actionsTypes.ADD :
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionsTypes.SUBTRACT :    
            return {
                ...state,
                counter: state.counter - action.val
            }        
        default:
            return state;     

    }
}

export default reducer;