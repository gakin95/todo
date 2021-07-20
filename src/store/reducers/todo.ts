import { Actions, Agent } from "../types";
import { Item } from "../../models/todo";
import { updatedObject } from "../utilty";

const initialState: Agent = {
  todos: [],
  active: [],
  completed: [],
};

const addTodo = (state = initialState, action: any) => {
  return updatedObject(state, {
    todos: [...state.todos, action.payload],
  });
};

const deleteTodo = (state = initialState, action: any) => {
  let lists = [...state.todos];
  lists = lists.filter((item) => item.id !== action.id);
  console.log(lists)
  return updatedObject(state, {
    todos: lists,
  });
};

const updateTodo = (state = initialState, action: any) => {
  const lists = [...state.todos];
  const tempItem: Item | any = lists.find(
    (item) => item.id === action.id
  );
  const index = lists.indexOf(tempItem);
  const act = lists[index];
  act.checked = !act.checked;
  return updatedObject(state, {
    todos: lists,
  });
};

const getAllActiveTodos = (state = initialState, action: any) => {
  let lists = [...state.todos];
  lists = lists.filter((item) => item.checked === false);
  return updatedObject(state, {
    active: lists,
  });
};

const getAllCompletedTodos = (state = initialState, action: any) => {
  let lists = [...state.todos];
  lists = lists.filter((item) => item.checked === true);
  return updatedObject(state, {
    completed: lists,
  });
};

const clearAllCompletedTodos = (state = initialState, action: any) => {
  let lists = [...state.todos];
  lists = lists.filter((item) => item.checked === false);
  return updatedObject(state, {
    todos: lists,
  });
};

export const todo = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return addTodo(state, action);
    case Actions.DELETE_TODO:
      return deleteTodo(state, action);
    case Actions.UPDATE_TODO:
      return updateTodo(state, action);
    case Actions.GET_ALL_ACTIVE_TODOS:
      return getAllActiveTodos(state, action);
    case Actions.GET_ALL_COMPLETED_TODOS:
      return getAllCompletedTodos(state, action);
    case Actions.CLEAR_ALL_COMPLETED_TODOS:
      return clearAllCompletedTodos(state, action);
    default:
      return state;
  }
};


