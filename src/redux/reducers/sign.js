const initialState = {
  currentId: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ID':
      return {
        ...state,
        currentId: action.value,
      }

    default:
      return state
  }
}
