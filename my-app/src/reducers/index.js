const initialState = {
  isLoading: false,
  image: null,
  status: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_START':
      return {
        ...state,
        isLoading: true
      }

    default:
      return state
  }
}