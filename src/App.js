import React from "react";
import Header from "./Components/Header"
import TodoItem from "./Components/todo_item";
import Button from "./Components/Button";
import "./Components/style.css"
const App=() =>{
  return (
    <div className="todo_container">
      <Header/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <Button/>
    </div>
  );
}
export default App;
