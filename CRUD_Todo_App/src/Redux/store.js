import { combineReducers, createStore } from "redux";
import { todoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
    todos: todoReducer
})

export const store = createStore(rootReducer);