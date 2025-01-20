const initialState = {
  questions: [],
  status: "",
  index: 0,
  answer: null,
  canGenerate: true,
  points: 0,
};

function quizReducer(state = initialState, action) {
  switch (action.type) {
    case "quiz/ready":
      return { ...state, questions: action.payload, status: "ready" };
    case "quiz/rejected":
      return { ...state, status: "rejected" };
    case "quiz/active":
      return { ...state, status: "active" };
    case "quiz/answered":
      return {
        ...state,
        answer: action.payload,
        points:
          state.questions[state.index].correctOption === action.payload
            ? state.points + state.questions[state.index].points
            : state.points,
      };
    case "quiz/NextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        canGenerate: true,
      };
    case "quiz/Finished":
      return { ...state, status: "finish" };
    case "quiz/Generated":
      return { ...state, canGenerate: false };
    case "quiz/Restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        canGenerate: true,
      };
    default:
      return state;
  }
}

export function quizReady(data) {
  return { type: "quiz/ready", payload: data };
}

export function quizRejected() {
  return { type: "quiz/rejected" };
}

export function quizActive() {
  return { type: "quiz/active" };
}

export function quizAnswered(indexOption) {
  return { type: "quiz/answered", payload: indexOption };
}

export function quizNextQuestion() {
  return { type: "quiz/NextQuestion" };
}

export function quizFinished() {
  return { type: "quiz/Finished" };
}

export function quizGenerated() {
  return { type: "quiz/Generated" };
}

export function quizRestart() {
  return { type: "quiz/Restart" };
}

export default quizReducer;
