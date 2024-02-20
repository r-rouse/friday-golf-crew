import { useParams } from 'react-router-dom';

function Course() {
  let { id } = useParams();

  // Use the id to fetch data or perform other actions

  return <div><h1>Course ID</h1> {id}</div>;
}

export {Course}