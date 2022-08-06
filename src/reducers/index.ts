import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions"; 

// this is will be for the entire state 
export interface StoreState { 
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
})