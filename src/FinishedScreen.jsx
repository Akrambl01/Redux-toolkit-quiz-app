import { useDispatch } from "react-redux";
import { quizRestart } from "./store/quizReducer";

function FinishedScreen() {
  const dispatch = useDispatch();

  return (
    <>
      <p className="result">Congratulations! You have completed the quiz 🎉</p>
      <button className="btn btn-ui" onClick={() => dispatch(quizRestart())}>
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
