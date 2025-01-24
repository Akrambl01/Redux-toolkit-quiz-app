// status of the quiz : loading, error, ready, active, finished

import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Quiz from "./Quiz";
import { quizReady, quizRejected } from "./store/quizReducer";
import StartScreen from "./StartScreen";
import Error from "./Error";
import Question from "./Question";
import { useEffect } from "react";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import NextButton from "./NextButton";
import Footer from "./Footer";
import Random from "./Random";

// states : status, questions, index, answer , points, highScore, secondesRemaining

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:7000/questions");
        const data = await res.json();
        dispatch(quizReady(data));
      } catch (err) {
        dispatch(quizRejected());
        throw new Error(err);
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Quiz>
        {/* based on status state */}
        {status === "ready" && <StartScreen />}
        {status === "rejected" && <Error />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Random />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finish" && <FinishedScreen />}

        {/* if an error display error component */}
        {/* if is loading display is loading component */}
        {/* if is ready display ready (startScreen) component */}
        {/* if is active display Question component */}
        {/* if is finished display Finished component */}
      </Quiz>
    </div>
  );
}

export default App;
