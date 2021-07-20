import { Actions } from '../types';
import { updatedObject } from "../utilty";

const initalState:any = {
    backgroundColor: 'dark'
}

const changeTheme = (state = initalState, action:any) => {
    return updatedObject(state, {
        backgroundColor: state.backgroundColor === 'dark' ? 'light' : 'dark'
    })
  }

  const theme = (state = initalState, action:any) => {
    switch (action.type) {
      case Actions.SET_THEME:
        return changeTheme(state, action);
      default:
        return state;
    }
  };

  export default theme