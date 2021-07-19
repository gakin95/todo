//import Props from '../models/addTodo';
import React from "react";
import "../css/main.scss";

const Footer: React.FC<{
  bgColor: string;
  num: number;
  onGetAll: () => void;
  onGetAllActive: () => void;
  onGetAllCompleted: () => void;
  onClearAllCompleted: () => void;
}> = ({ bgColor, num, onGetAll, onGetAllActive, onGetAllCompleted,onClearAllCompleted  }) => (
  <div className={`footer ${bgColor === "dark" ? "dark" : "light"}`}>
    <p>{num} items left</p>
    <div className="dflex">
      <p onClick={onGetAll}>all</p>
      <p onClick={onGetAllActive}>active</p>
      <p onClick={onGetAllCompleted}>completed</p>
    </div>
    <p onClick={onClearAllCompleted}>Clear completed</p>
  </div>
);

export default Footer;
