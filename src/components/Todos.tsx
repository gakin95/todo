import { useState } from "react";
import "../css/main.scss";
import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";
import AddTodo from "./newTodos";
import TodoItem from "./todoItem";
import Footer from "./footer";
import { Item } from "../models/todo";

const Todos = () => {
  const [backgroundColor, setBackgroundColor] = useState("dark");
  const [addTodo, setAddTodo] = useState("");
  const [todos, setTodos] = useState<Item[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddTodo(e.target.value);
  };

  const handleSubmit = (e: any) => {
    if (!addTodo) return;
    if (e.key === "Enter") {
      const list = [...todos];
      const input: Item = {
        title: addTodo,
        checked: false,
        id: new Date().toISOString(),
      };
      list.push(input);
      console.table(list);
      setTodos(list);
      setAddTodo("");
    }
  };
  const deleteItem = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const checkItem = (id: string) => {
    const lists = [...todos];
    const curItem: Item | any = lists.find((item) => item.id === id);
    const index = lists.indexOf(curItem);
    const action = lists[index];
    action.checked = !action.checked;
    setTodos(lists);
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
                onClick={() => setBackgroundColor("light")}
              />
            )}
            {backgroundColor === "light" && (
              <img
                src={iconMoon}
                alt=""
                onClick={() => setBackgroundColor("dark")}
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
              num={7}
              onGetAll={() => console.log("i was clicked")}
              onGetAllActive={() => console.log("i was clicked")}
              onGetAllCompleted={() => console.log("i was clicked")}
              onClearAllCompleted={() => console.log("i was clicked")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todos;
