import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleatTodos, setIncompleatTodos] = useState(["aaa", "hohoho"]);
  const [compleatTodos, setCompleatTodos] = useState(["gege"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleatTodos, todoText];
    setIncompleatTodos(newTodo);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="ToDoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incompleat-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompleatTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="compleat-area">
        <p className="title">完了のTodo</p>
        <ul>
          {compleatTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
