const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            const newState = Object.assign({}, state); //ES 5
            newState.counter = state.counter + 1;
            return newState; 
        case 'DECREMENT' :
            return {
                ...state,  // ES 6/7
                counter: state.counter - 1
            }
        case 'ADD' :
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT' :    
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT' :
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT' :
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