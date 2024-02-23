import React, { useState } from 'react';

function ScorecardForm() {
    // Initial state setup for form fields
    const [playerId, setPlayerId] = useState('');
    const [courseId, setCourseId] = useState('');
    const [scorecardId, setScoreCardId] = useState('');
    const [strokes, setStrokes] = useState(Array(18).fill('')); // Initialize scores for 18 holes with empty strings
    const [holes, setHoles] = useState([]);

    // Handle change in hole scores
    const handleScoreChange = (index, value) => {
        const newScores = strokes.map((stroke, i) => (i === index ? value : stroke));
        setStrokes(newScores);
    };

    const createScorecard = async() => {        
    const payload = {
        playerId: playerId,
        courseId: courseId,
        total_score: 72,
        date_played: new Date()
    };

        const response = await fetch('http://localhost:3001/api/scorecards/newcard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error('Failed to create scorecard');
        const responseData = await response.json();
        setScoreCardId(responseData.id)
        console.log(scorecardId)
    };
    const  fetchHolesForCourse = async(courseId) => {
        const response = await fetch(`http://localhost:3001/api/courses/${courseId}/holes`);
        if (!response.ok) {
          throw new Error('Failed to fetch holes');
        }
        const holes = await response.json();
        setHoles(holes)
      }
    const addStrokesToScorecard = async (scorecardId, holeStrokes) => {
        const response = await fetch('http://localhost:3001/api/scorecards/addStrokes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ scorecardId, holeStrokes })
        });
        const body = JSON.stringify({scorecardId})

        console.log(body)
      
        if (!response.ok) throw new Error('Failed to add strokes');
        return response.json(); // Handle the response
      };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        createScorecard(playerId, courseId)
        .then (console.log(strokes))
        .then (fetchHolesForCourse(courseId))
        .then(scorecard => {
            // Example adjustment, assuming you have a way to get holeIds
            const holeStrokes = strokes.map((stroke, index) => ({
                holeId: holes[index].id, // Example: Replace with actual holeId mapping
                strokes: parseInt(stroke, 10)
            }));
            return addStrokesToScorecard(scorecardId, holeStrokes);
        })
        .then(result => console.log('Strokes added successfully', result))
        .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="playerId">Player ID:</label>
                <input
                    type="number"
                    id="playerId"
                    value={playerId}
                    onChange={(e) => setPlayerId(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="courseId">Course ID:</label>
                <input
                    type="number"
                    id="courseId"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    required
                />
            </div>
            <div>
                <h3>Scores for Each Hole:</h3>
                {strokes.map((stroke, index) => (
                    <div key={index}>
                        <label htmlFor={`hole-${index + 1}`}>Hole {index + 1}:</label>
                        <input
                            type="number"
                            id={`hole-${index + 1}`}
                            value={stroke}
                            onChange={(e) => handleScoreChange(index, e.target.value)}
                            min="1" // Assuming the minimum score is 1
                            required
                        />
                    </div>
                ))}
            </div>
            <button type="submit">Submit Scorecard</button>
        </form>
    );
}

export default ScorecardForm;
