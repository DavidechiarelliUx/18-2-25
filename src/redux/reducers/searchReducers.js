import { CLEAR_SEARCH_RESULTS, SET_SEARCH_RESULT } from "../actions"

const initialState={
    results :[]
}

const searchReducers = (state = initialState, action) => {
    switch(action.type){
        case SET_SEARCH_RESULT:
            return {
                ...state,
                results : action.payload
            }
    
        case CLEAR_SEARCH_RESULTS:
            return {
                ...state,
                results: [],
            };
        default:
            return state;
    }
}
export default searchReducers;
