// const initialState = {
//     isError: false,
//     isLoading: false,
//     data: {},
//     msg: "",
//   };
  
//   const user = (state = initialState, action) => {
//     switch (action.type) {
//       case "GET_USER_BY_ID_PENDING": {
//         return {
//           ...state,
//           isLoading: true,
//         };
//       }
//       case "GET_USER_BY_ID_FULFILLED": {
//         return {
//           ...state,
//           isLoading: false,
//           data: action.payload.data.data,
//           msg: action.payload.data.msg,
//         };
//       }
//       default: {
//         return state;
//       }
//     }
//   };
  
//   export default user;