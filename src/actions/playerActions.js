export const fetchPlayerSuccess = player => ({
    type: 'FETCH_PLAYER_SUCCESS',
    payload: player
  });
  
  export const fetchPlayer = playerId => {
    return async dispatch => {
      try {
        const response = await fetch(`http://localhost:3001/api/players/scorecards/${playerId}`);
        const data = await response.json();
        dispatch(fetchPlayerSuccess(data));
      } catch (error) {
        console.error('Fetch player error:', error);
      }
    };
  };
  