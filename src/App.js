import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const inputText = document.querySelector('.add-input');
  const todoList = document.querySelector('.todo-list');
  const filterOptions = document.querySelector('.filter-todo');

  function addTodo(e) {
    e.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    const newTodo = document.createElement("li");
    newTodo.classList.add('todo-item');
    newTodo.innerText = inputText.value;
    todoDiv.appendChild(newTodo);

    const checkBtn = document.createElement("button");
    checkBtn.classList.add('complete-btn');
    checkBtn.innerHTML = '<FontAwesomeIcon icon={faCheck} />';
    todoDiv.appendChild(checkBtn);

    const trashBtn = document.createElement("button");
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = '<FontAwesomeIcon icon={faTrash} />';
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);

    inputText.value = '';
  }

  todoList.addEventListener("click", (e) => {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
      const todo = item.parentElement;
      todo.classList.add('fall');
      todo.addEventListener("transitionend", function () {
        todo.remove();
      });
    }
    if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
  });

  filterOptions.addEventListener("click", (e) => {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = 'flex';
          break;
        case "completed":
          if (todo.classList.contains('completed')) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        default:
          break;
      }
    });
  });

  return (
    <div className="App">
      <div className="main">
        <h1 className="head">Smit's Todo Project</h1>
        <div className="input-items">
          <input type="text" className="add-input" placeholder="Add Some Text" />
          <button type="submit" className="generate" onClick={addTodo}><FontAwesomeIcon icon={faSquarePlus} /></button>

          <div className="select">
            <select name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </div>

        <div className="todo-container">
          <ul className="todo-list"></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
