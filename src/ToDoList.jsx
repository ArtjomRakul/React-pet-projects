import { useState } from 'react';

export default function ToDoList() {
  const [tasks, setTasks] = useState(["Go to the gym"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index === 0) return; // Can't move up the first task
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
      return newTasks;
    });
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return; // Can't move down the last task
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
      return newTasks;
    });
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button onClick={() => moveTaskUp(index)} disabled={index === 0}>
              ↑
            </button>
            <button onClick={() => moveTaskDown(index)} disabled={index === tasks.length - 1}>
              ↓
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
