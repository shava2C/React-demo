import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleatTodos, setIncompleatTodos] = useState([]);
  const [compleatTodos, setCompleatTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleatTodos, todoText];
    setIncompleatTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    deletTodos(index);
  };

  const onClickComplete = (index) => {
    deletTodos(index);
    const newCompleatTodos = [...compleatTodos, incompleatTodos[index]];
    setCompleatTodos(newCompleatTodos);
  };

  const onClickBack = (index) => {
    const newcompleatTodos = [...compleatTodos];
    newcompleatTodos.splice(index, 1);

    setCompleatTodos(newcompleatTodos);
    const newTodos = [...incompleatTodos, compleatTodos[index]];
    setIncompleatTodos(newTodos);
  };

  const deletTodos = (index) => {
    const newTodos = [...incompleatTodos];
    newTodos.splice(index, 1);
    setIncompleatTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <div className="incompleat-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompleatTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="compleat-area">
        <p className="title">完了のTodo</p>
        <ul>
          {compleatTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
