

import '../styles/scoreCard.css'
const ScoreCard = ({name, totalScore, scores, date}) => {


    return (
        <div className="scorecard">
          <h2>Course: {name}</h2>
          <h2>Date: {date}</h2>
          {/* <p>Total Score: {totalScore}</p> */}
          <ul>
            {scores.map((score) => (
              <li>Hole {score.hole.hole_number}: {score.strokes} strokes</li>
            ))}
          </ul>
        </div>
      );
    }
export {ScoreCard}