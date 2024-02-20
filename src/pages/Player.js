import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { fetchPlayer } from '../actions/playerActions';
import { connect } from 'react-redux';
import { ScoreCard } from '../components/ScoreCard';

function Player({ player, fetchPlayer }) {
  let { id } = useParams();

  useEffect(() => {
    fetchPlayer(id);
  }, [fetchPlayer, id]); // Include `id` in the dependencies array

  // Return statement to render the player's data
  console.log(player)
  return (
    <div>
      {player ? (
        <div>
          {/* Assuming the player object has a name property */}
          <h1>{player.name}</h1>
          {player.scorecards && player.scorecards.map((scorecard, index) => (
              <ScoreCard
                key={index} // It's better to use a unique ID if available
                name={scorecard.course.name} // Assuming you want to use the date as the name
                scores={scorecard.scores}
                date={scorecard.updatedAt}
              />
            ))}
        </div>
      ) : (
        <p>Loading player...</p> // Display a loading message or a spinner
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  player: state.player.player
});

const mapDispatchToProps = {
  fetchPlayer
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
