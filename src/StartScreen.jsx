import { useDispatch, useSelector } from "react-redux";
import { quizActive } from "./store/quizReducer";

function StartScreen() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  return (
    <div>
      <h2>Welcome To The React Quiz!</h2>
      <p> {questions.length} questions to test your React mastery</p>
      <button className="btn btn-ui" onClick={() => dispatch(quizActive())}>
        Let&apos;s start
      </button>
    </div>
  );
}

export default StartScreen;
