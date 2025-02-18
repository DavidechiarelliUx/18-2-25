const initialState = {
  count: 0,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;

// const initialState = {
//   favourite: {
//     content: [],
//   },
// };
// const mainReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADDFAVOURITES:
//       return {
//         ...state,
//         favourite: {
//           ...state.favourite,
//           content: [...state.favourite.content, action.payload],
//         },
//       };
//     case REMOVEFAVOURITES:
//       return {
//         ...state,
//         favourite: {
//           ...state.favourite,
//           content: state.favourite.content.filter((fav) => fav !== action.payload),
//         },
//       };
//     default:
//       return state;
//   }
// };
// export default mainReducer;
