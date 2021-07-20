import { useState, useEffect } from "react";
import "../css/main.scss";
import { useDispatch } from "react-redux";
import { useSelector, RootStateOrAny } from "react-redux";
import { Dispatch } from "redux"

import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";
import AddTodo from "./newTodos";
import TodoItem from "./todoItem";
import Footer from "./footer";
import { Item } from "../models/todo";
import { setTheme,invokeActions, deletedActions, updatedActions, clearCompletedActions
} from '../store/actions'


const Todos = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const backgroundColor = useSelector((state : RootStateOrAny) => state.theme.backgroundColor); 
  const allTodos:Item[] = useSelector((state : RootStateOrAny) => state.todo.todos); 
  const allActiveTodos:Item[] = useSelector((state : RootStateOrAny) => state.todo.active); 
  const allCompletedTodos:Item[] = useSelector((state : RootStateOrAny) => state.todo.completed); 
  const [addTodo, setAddTodo] = useState("");
  const [todos, setTodos] = useState<Item[]>([]);

  useEffect(() => {
    setTodos(allTodos)
  },[allTodos])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddTodo(e.target.value);
  };
const clearCompletedTodos = () => {
  dispatch(clearCompletedActions())
}

  const handleSubmit = (e: any) => {
    if (!addTodo) return;
    if (e.key === "Enter") {
      const input: Item = {
        title: addTodo,
        checked: false,
        id: new Date().toISOString(),
      };
      dispatch(invokeActions(input))
      setAddTodo("");
    }
  };
  const deleteItem = (id: string) => {
    dispatch(deletedActions(id));
  };
  const checkItem = (id: string) => {
    dispatch(updatedActions(id))
  };
  return (
    <div className={`root ${backgroundColor}`}>
      <header
        className={
          backgroundColor === "dark"
            ? "backgroundImgDark"
            : "backgroundImgLight"
        }
      ></header>
      <section>
        <div className="top">
          <div className="flex title">
            <p>Todo</p>
            {backgroundColor === "dark" && (
              <img
                src={iconSun}
                alt=""
                onClick={() => dispatch(setTheme())}
              />
            )}
            {backgroundColor === "light" && (
              <img
                src={iconMoon}
                alt=""
                onClick={() => dispatch(setTheme())}
              />
            )}
          </div>
          <div>
            <AddTodo
              bgColor={backgroundColor}
              iconContainerBgColor={backgroundColor}
              value={addTodo}
              onChange={handleChange}
              onKeyPress={handleSubmit}
            />
            {todos.map((item, i) => (
              <TodoItem
                text={item.title}
                checked={item.checked}
                bgColor={backgroundColor}
                onClick={() => console.log("gdgdg")}
                onCheck={() => checkItem(item.id)}
                onDelete={() => deleteItem(item.id)}
              />
            ))}
            <Footer
              bgColor={backgroundColor}
              num={allActiveTodos.length}
              onGetAll={() => setTodos(allTodos)}
              onGetAllActive={() => setTodos(allActiveTodos)}
              onGetAllCompleted={() => setTodos(allCompletedTodos)}
              onClearAllCompleted={() => clearCompletedTodos()}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todos;
