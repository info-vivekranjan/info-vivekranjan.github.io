import { loadData, saveData } from "../../utils/localStorage";
import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "./actionTypes";




const initState = {
    todo: loadData("todos") || []
}


function todoReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TODO: {

            const updatedTodo = [...state.todo, action.payload];
            saveData("todos", updatedTodo)

            return {
                ...state,
                todo: updatedTodo
            }
        }

        case DELETE_TODO: {

            const updatedTodo = action.payload;
            saveData("todos", updatedTodo)

            return {
                ...state,
                todo: updatedTodo
            }
        }


        case TOGGLE_TODO: {

            const updatedTodo = action.payload;
            saveData("todos", updatedTodo)

            return {
                ...state,
                todo: updatedTodo
            }
        }

        case EDIT_TODO: {
            const newTodo = state.todo.find((item) => item.id === action.payload.id)
            console.log(action.payload);
            newTodo.title = action.payload.title
            // saveData("todos", newTodo)
            return {
                ...state,
                todo: state.todo.filter((item) => item.id === action.payload.id ? item : newTodo)
            }
        }



        default: {
            return state;
        }
    }
}

export { todoReducer }

