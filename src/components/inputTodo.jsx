import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd } = onClickAdd;
  return (
    <div className="input-area">
      <input
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
