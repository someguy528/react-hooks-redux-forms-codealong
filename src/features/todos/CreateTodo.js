import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {todoAdded} from "./todosSlice.js";

function CreateTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.entities)

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    dispatch(todoAdded(text));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <p>
          <label>add todo</label>
          <input type="text" value={text} onChange={handleChange} />
        </p>
        <input type="submit" />
      </form>
      <p>Form Text: {text}</p>
      <div>Todos: {todos.map(t=>(<p key={t} >{t}</p>))}</div>
    </div>
  );
}

export default CreateTodo;
