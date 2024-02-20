const initialState = {
    player: {}
  };
  
  const playerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PLAYER_SUCCESS':
        return {
          ...state,
          player: action.payload
        };
      default:
        return state;
    }
  };
  
  export default playerReducer;
  