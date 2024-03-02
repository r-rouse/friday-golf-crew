const initialState = {
  player: {},
  players: [],
};

const playerManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PLAYER_SUCCESS':
      return { ...state, player: action.payload };
    case 'FETCH_PLAYERS_SUCCESS':
      return { ...state, players: action.payload };
    default:
      return state;
  }
};

export default playerManagementReducer;

  