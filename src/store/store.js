import { legacy_createStore as createStore } from "redux";
import quizReducer from "./quizReducer";


const store = createStore(quizReducer)

export default store