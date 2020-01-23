import axios from 'axios';

export const fetchImage = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_START' });
  }
}



// const thunk = action => next => store => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//   } else if (typeof action === 'object') {
//     next(action);
//   }
// };