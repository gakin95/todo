import { Actions } from '../types';
import { Item } from "../../models/todo";


export const setTheme = () => {
    return {
        type: Actions.SET_THEME,
    }
}

export const addATodo = (payload: Item) => {
    return {
        type: Actions.ADD_TODO,
        payload
    }
}

export const deleteTodo = (id: string) => {
    return {
        type: Actions.DELETE_TODO,
        id
    }
}

export const updateTodo = (id: string) => {
    return {
        type: Actions.UPDATE_TODO,
        id
    }
}

export const getActiveTodos = () => {
    return {
        type: Actions.GET_ALL_ACTIVE_TODOS,
    }
}

export const getCompletedTodos = () => {
    return {
        type: Actions.GET_ALL_COMPLETED_TODOS,
    }
}

export const clearCompletedTodos = () => {
    return {
        type: Actions.CLEAR_ALL_COMPLETED_TODOS,
    }
}

export const getAllTodos = () => {
    return {
        type: Actions.ADD_TODO,
    }
}

export const invokeActions = (payload: Item) => {
    return (dispatch: any): void => {
        dispatch(addATodo(payload));
        dispatch(getActiveTodos());
        dispatch(getCompletedTodos());
    }
}

export const deletedActions = (id: string) => {
    return (dispatch: any): void => {
        dispatch(deleteTodo(id));
        dispatch(getActiveTodos());
        dispatch(getCompletedTodos());
    }
}

export const updatedActions = (id: string) => {
    return (dispatch: any): void => {
        dispatch(updateTodo(id));
        dispatch(getActiveTodos());
        dispatch(getCompletedTodos());
    }
}

export const clearCompletedActions = () => {
    return (dispatch: any): void => {
        dispatch(clearCompletedTodos());
        dispatch(getActiveTodos());
        dispatch(getCompletedTodos());
    }
}

