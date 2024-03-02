import React, { useState, useEffect } from 'react';

const HoleScores = ({ scorecards, holeId }) => {
  const [holeScores, setHoleScores] = useState([]);

  useEffect(() => {
    const scores = scorecards?.reduce((acc, card) => {
      const holeScore = card.scores.find(score => score.holeId === holeId);
      if (holeScore) {
        acc.push(holeScore.strokes);
      }
      return acc;
    }, []);

    setHoleScores(scores);
    console.log(holeScores)
  }, [scorecards, holeId]);

  return (
    <div>
      <h2>Scores for Hole {holeId}</h2>
      <ul>
        {holeScores?.map((score, index) => (
          <li key={index}>{score} strokes</li>
        ))}
      </ul>
    </div>
  );
};

export default HoleScores