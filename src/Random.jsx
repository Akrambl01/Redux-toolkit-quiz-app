import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizGenerated } from "./store/quizReducer";

function Random() {
  const canGenerate = useSelector((state) => state.canGenerate);
  const dispatch = useDispatch();

  const ourNum = [16, 14, 22, 21, 6]; // Initial numbers
  const maxClicks = 20; // Maximum allowed clicks
  const [answered, setAnswered] = useState(ourNum); // Track numbers already used
  const [number, setNumber] = useState(null); // Current number
  const [clicks, setClicks] = useState(0); // Track the number of clicks

  function handleClick() {
    dispatch(quizGenerated());

    if (clicks >= maxClicks) return; // Stop the process if max clicks are reached

    let newNumber;

    do {
      // Generate a new random number until it doesn't exist in the array
      newNumber = Math.ceil(Math.random() * 25);
    } while (answered.includes(newNumber));

    // Update the state with the new number and add it to the answered list
    setNumber(newNumber);
    setAnswered([...answered, newNumber]);
    setClicks(clicks + 1); // Increment the click counter
  }

  return (
    <button
      className="btn btn-ui random"
      onClick={handleClick}
      disabled={clicks >= maxClicks || !canGenerate}
    >
      {clicks < maxClicks
        ? `Random ${number !== null ? number : ""}`
        : "No more clicks allowed"}
    </button>
  );
}

export default Random;
