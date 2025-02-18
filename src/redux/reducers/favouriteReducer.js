import { ADDFAVOURITES, REMOVEFAVOURITES } from "../actions";


const initialState = {
    content: [],
};
const favouriteReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDFAVOURITES:
      return {
        ...state,
          content: [...state.content, action.payload],
      };
    case REMOVEFAVOURITES:
      return {
        ...state,
          content: state.content.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};
export default favouriteReducers;
