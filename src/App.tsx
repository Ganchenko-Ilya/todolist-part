import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import { Todolist } from "./components/Todolist";
import { v1 } from "uuid";

export type tasksType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type filterType = "All" | "Active" | "Completed";

function App() {
  const [tasks, setTasks] = useState<tasksType[]>([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: false },
    { id: v1(), title: "REACT", isDone: false },
  ]);

  let [filter, setFilter] = useState<filterType>("All");

  let data = tasks;
  if (filter === "All") {
    
    data = tasks;
  }
  if (filter === "Active") {
    data = tasks.filter((el) => !el.isDone);
  }
  if (filter === "Completed") {
    data = tasks.filter((el) => el.isDone);
  }

  const deleteTask = (tId: string) => {
    setTasks(tasks.filter((el) => el.id !== tId));
  };

  const addTask = (value: string) => {
    let task = { id: v1(), title: value, isDone: false };
    setTasks([task, ...tasks]);
  };

  const newIsDoneChacked = (isChacked: boolean, isId: string) => {
    let taskIsDone = tasks.find((t) => t.id === isId);
    if (taskIsDone) {
      taskIsDone.isDone = isChacked;
    }
    setTasks([...tasks])
  };

  return (
    <div className="todolist">
      <Todolist
        newIsDoneChacked={newIsDoneChacked}
        data={data}
        setFilter={setFilter}
        deleteTask={deleteTask}
        addTask={addTask}
        filter={filter}
      />
    </div>
  );
}

export default App;
