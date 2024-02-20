
import React from 'react';
import '../styles/scoreCard.css'
import { formatDate } from '../utils/dateFormatter';
const ScoreCard = ({ name, totalScore, scores, date, par }) => {
    const totalStrokes = scores.reduce((acc, score) => acc + score.strokes, 0);
    const formattedDate = formatDate(date)
    return (
        <div className="scorecard">
            <div className='scorecard-title'>
                <h2>Course: {name}</h2>
                <h2>Par: {par}</h2>
                <h2>Date: {formattedDate}</h2>
                {/* <p>Total Score: {totalScore}</p> */}
            </div>
            <div className='list-container'>
                <ul>
                    {scores.map((score) => (
                        <React.Fragment>
                            <div className='list-container-fragment'>

                                <li>Hole {score.hole.hole_number}: </li>
                                <li>{score.strokes} strokes</li>
                            </div>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
            <p>Total Strokes: {totalStrokes}</p> {/* Display total strokes here */}
        </div>
    );
}
export { ScoreCard }