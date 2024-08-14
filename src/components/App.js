import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
 const [selectedCategory, setSelectedCategory] = useState("All");
 const [tasks, setTasks] = useState(TASKS);

  function onTaskFormSubmit(newItem) {
    setTasks([...tasks, newItem]);
  }

  function handleDelete(text) {
    setTasks(tasks.filter(task => task.text !== text));
  }

const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);  

  return (
    <div className="App">
      <h2>My tasks</h2>
       <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={CATEGORIES}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(cat => cat !== "All")}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={filteredTasks}
        handleDelete={handleDelete}
      />

    </div>
  );
}

export default App;
