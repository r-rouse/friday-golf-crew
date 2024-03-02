import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllPlayers } from '../actions/playerActions'; // Adjust the import path as needed

function Course({ players, fetchAllPlayers }) {
  let { id } = useParams();
  
  useEffect(() => {
    fetchAllPlayers(); // If ID is used in fetching, pass it as an argument
    // Logging here won't show updated players immediately after fetchAllPlayers call
  }, [fetchAllPlayers, id]); // Include dependencies if needed

  return (
    <div>
      <h1>Course ID: {id}</h1>
      {players && players.map((player, index) => {
        // Ensure you return JSX to render something for each player
        return (
          <div key={index}> {/* Ideally, use a more unique key than index if possible */}
            {/* Render your player data here */}
            <p>Player Name: {player.name}</p> {/* Example, adjust based on your data structure */}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  players: state.player.players, // Ensure this path matches your state structure
});

const mapDispatchToProps = {
  fetchAllPlayers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Course);
