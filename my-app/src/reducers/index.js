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

    case 'FETCHING_DONE':
      return {
        ...state,
        isLoading: false,
        image: action.payload.message,
        status: action.payload.status
      }

    default:
      return state
  }
}