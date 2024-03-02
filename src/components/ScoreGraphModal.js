export const ScoreGraphModal = ({ scores }) => {
    const data = {
      labels: scores.map((_, index) => `Score ${index + 1}`),
      datasets: [{
        label: 'Scores',
        data: scores,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }],
    };
  
    return <Bar data={data} />;
  };