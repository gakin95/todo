import { Item } from "../models/todo";

export interface Agent {
  todos: Item[],
  active: Item[],
  completed: Item[],
}

export enum Actions {
    SET_THEME = 'SET_THEME',
    ADD_TODO = 'ADD_TODO',
    ALL_TODOS = 'ALL_TODOS',
    DELETE_TODO = 'DELETE_TODO',
    UPDATE_TODO = 'UPDATE_TODO',
    GET_ALL_ACTIVE_TODOS = 'GET_ALL_ACTIVE_TODOS',
    GET_ALL_COMPLETED_TODOS = 'GET_ALL_COMPLETED_TODOS',
    CLEAR_ALL_COMPLETED_TODOS = 'CLEAR_ALL_COMPLETED_TODOS',
  }