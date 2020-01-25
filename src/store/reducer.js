import * as actionsTypes from './actions';

const initialState = {
    counter: 0,
    results: []
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
        case actionsTypes.STORE_RESULT :
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionsTypes.DELETE_RESULT :
           // const id = 2;
           // const newArray = [...state.results];  // one way removing element of without mutating the orginal array 
           // newArray.splice(id, 1); 
           // another way 
           const updateArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updateArray
            }        
        default:
            return state;     

    }
}

export default reducer;