import axios from 'axios';

export const fetchImage = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_START' });
    axios.get(`https://dog.ceo/api/breeds/image/random`)
      .then(res => { console.log(res.data.message)
        dispatch({ type: 'FETCHING_DONE', payload: res.data })
      })
      .catch(err => console.log(err))
  }
}



// const thunk = action => next => store => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//   } else if (typeof action === 'object') {
//     next(action);
//   }
// };