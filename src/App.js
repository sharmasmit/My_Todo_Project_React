import './App.css';

function App() {

  const generateBtn = document.querySelector('.generate');
  const inputText = document.querySelector('.add-input');
  const todoList = document.querySelector('.todo-List');
  const filterOptions = document.querySelector('.filter-todo');

  generateBtn.addEventListener("click", addTodo);
  todoList.addEventListener("click", deleteCheck);
  filterOptions.addEventListener("click", filterTodo);

  function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = inputText.value;
    todoDiv.appendChild(newTodo);

    const checkBtn = document.createElement('button');
    checkBtn.classList.add('complete-btn');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(checkBtn);

    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);

    inputText.value = ' ';
  }

  function deleteCheck(e) {
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
  }

  function filterTodo(e) {
    const todo = todoList.childNodes;
    todo.forEach(function (todo) {
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
      }
    });
  }

  return (
    <div className="App">
      <div className="main">
        <h1 className="hrad">Smit's Todo Project</h1>
        <div className="input-items">
          <input type="text" className="add-input" placeholder="Add Some Text"/>
            <button type="submit" className="generate"><i class="fa-solid fa-square-plus"></i></button>

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
