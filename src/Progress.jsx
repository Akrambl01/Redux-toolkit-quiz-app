import { useSelector } from "react-redux";

function Progress() {
  const questions = useSelector((state) => state.questions);
  const index = useSelector((state) => state.index);
  // const points = useSelector((state) => state.points);
  const numQuestions = questions.length;
  // const maxPossiblePoints = questions.reduce(
  //   (prev, cur) => prev + cur.points,
  //   0
  // );
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + 1}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}{" "}
      </p>
      {/* <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p> */}
    </header>
  );
}

export default Progress;
