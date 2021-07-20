import { combineReducers } from "redux";
import {
    todo
} from "./todo";
import theme from './theme'

const appReducer = combineReducers({
    todo,
    theme
});

export default appReducer;