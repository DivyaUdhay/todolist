import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [taskList, setTaskList] = useState("");
  const [todoList, settodoList] = useState([]);

  let addtask = () => {
    if (taskList == "") {
      alert("Enter your to do List!!!");
    }
    settodoList([
      ...todoList,
      { id: todoList.length + 1, name: `${taskList}`, isDone: false },
    ]);
  };

  let taskDone = (id) => {
    let itemList = todoList.findIndex((obj) => obj.id === id);
    // tdfyguh
    settodoList([...todoList]);
    if (todoList[itemList].isDone === false) {
      todoList[itemList].isDone = true;
    } else if (todoList[itemList].isDone === true) {
      todoList[itemList].isDone = false;
    }
  };

  let deletetask = (id) => {
    let removetask = todoList.findIndex((obj) => obj.id === id);
    todoList.splice(removetask, 1);
    settodoList([...todoList]);
  };

  return (
    <div className="content">
      <h1>TO DO LIST</h1>
      <input
        type="text"
        placeholder="Please Enter Task"
        onChange={(e) => setTaskList(e.target.value)}
      />
      <div>
        <button className="btn" onClick={addtask}>
          Add Task
        </button>
      </div>
      <ul>
        {todoList.map((item) => {
          return (
            <li className={item.isDone ? "mark-done" : ""}>
              <h3>{item.name}</h3>
              <div>
                <button className="btn1" onClick={() => taskDone(item.id)}>Done</button> -
                <button className="btn2" onClick={() => deletetask(item.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
