import { useReducer } from "react";
const initialState = { count: 0, step: 1 };
function reducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case "inc":
      return {
        ...state,
        count: state.count + state.step,
      };
    case "dec":
      return {
        ...state,
        count: state.count - state.step,
      };
    case "defineCount":
      return {
        ...state,
        count: action.payload,
      };
    case "defineStep":
      return {
        ...state,
        step: action.payload,
      };
    case "reset":
      return initialState;

    default:
      return state;
  }
}
function DateCounter() {
  const [{ count, step }, dispatch] = useReducer(reducer, initialState);
  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "defineCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "defineStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
