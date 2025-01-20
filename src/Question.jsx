import { useDispatch, useSelector } from "react-redux";
import { quizAnswered } from "./store/quizReducer";

function Question() {
  const dispatch = useDispatch();
  const { questions, index, answer, canGenerate } = useSelector(
    (state) => state
  );
  const isNull = answer === null;

  const question = questions[index];
  return (
    <main className="main">
      <h4>{question.question}</h4>
      {question.options.map((option, index) => (
        <button
          key={index}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            answer !== question.correctOption && answer === index ? "no" : "yes"
          }
          ${!isNull && (index === question.correctOption ? "correct" : "wrong")}
          `}
          onClick={() => dispatch(quizAnswered(index))}
          disabled={!isNull || canGenerate}
        >
          {option}
        </button>
      ))}
    </main>
  );
}

export default Question;
