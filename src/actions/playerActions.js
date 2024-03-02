export const fetchPlayerSuccess = player => ({
  type: 'FETCH_PLAYER_SUCCESS',
  payload: player
});
export const fetchPlayersSuccess = players => ({
  type: 'FETCH_PLAYERS_SUCCESS',
  payload: players
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
export const fetchAllPlayers = () => {
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:3001/api/players/Allscores`);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Check the data
        dispatch(fetchPlayersSuccess(data));
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Fetch all player error:', error);
    }
  };
};
