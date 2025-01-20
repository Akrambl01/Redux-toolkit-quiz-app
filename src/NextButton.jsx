import { useDispatch, useSelector } from "react-redux";
import { quizFinished, quizNextQuestion } from "./store/quizReducer";

function NextButton() {
  const dispatch = useDispatch();
  const { answer, index, questions } = useSelector((state) => state);

  if (answer === null) return null;

  if (index < questions.length - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch(quizNextQuestion())}
      >
        Next
      </button>
    );

  if (index === questions.length - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch(quizFinished())}>
        Finish
      </button>
    );
}

export default NextButton;
