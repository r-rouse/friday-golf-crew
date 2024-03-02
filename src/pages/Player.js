import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayer } from '../actions/playerActions';
import { ScoreCard } from '../components/ScoreCard';
import HoleScores from '../components/HoleScores'; // Import the HoleScores component
import '../styles/scoreCard.css';

function Player({ player, fetchPlayer }) {
    let { id } = useParams();
    const [selectedHoleId, setSelectedHoleId] = useState(187); // State to track the selected hole

    useEffect(() => {
        fetchPlayer(id);
    }, [fetchPlayer, id]);

    // Handler to change the selected hole
    const handleHoleSelect = (holeId) => {
        setSelectedHoleId(holeId);
    };

    return (
        <div>
            {player ? (
                <>
                    <h1>{player.name}</h1>
                    <div className='grid-container'>
                        {player.scorecards && player.scorecards.map((scorecard, index) => (
                            <ScoreCard
                                key={index}
                                name={scorecard.course.name}
                                par={scorecard.course.par}
                                scores={scorecard.scores}
                                date={scorecard.updatedAt}
                                // Optionally pass handleHoleSelect if you want to select holes from within ScoreCard
                            />
                        ))}
                    </div>
                    {/* Dropdown or another UI element to select a hole could be added here */}
                    {/* Assuming you have a way to select a holeId, pass it to the HoleScores component */}
                    {selectedHoleId && <HoleScores scorecards={player.scorecards} holeId={187} />}
                </>
            ) : (
                <p>Loading player...</p>
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

