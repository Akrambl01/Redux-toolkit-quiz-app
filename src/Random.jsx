import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizGenerated } from "./store/quizReducer";

function Random() {
  const canGenerate = useSelector((state) => state.canGenerate);
  const dispatch = useDispatch();

  const ourNum = [11, 14, 18, 22, 24];
  const maxClicks = 20;
  const [answered, setAnswered] = useState(ourNum);
  const [number, setNumber] = useState(null);
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    dispatch(quizGenerated());

    let newNumber;
    do {
      newNumber = Math.ceil(Math.random() * 25);
    } while (answered.includes(newNumber));

    setNumber(newNumber);
    setAnswered([...answered, newNumber]);
    setClicks(clicks + 1);
  }

  return (
    <button
      className="btn btn-ui random"
      onClick={handleClick}
      disabled={clicks >= maxClicks || !canGenerate}
    >
      {clicks < maxClicks
        ? `Random ${number !== null ? number : ""}`
        : "No more questions"}
    </button>
  );
}

export default Random;
