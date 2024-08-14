import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskCategory, setTaskCategory] = useState("Code");
  const [taskDetails, setTaskDetails] = useState("");

  // Adds event handler for onDetails and handleChange
  const options = categories
    .filter(category => category !== "All")
    .map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ));

  //handles category selection
  function updateCategory(e) {
    setTaskCategory(e.target.value);
  }

//handles form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (taskDetails.trim() !== "") { 
      const newItem = {
        text: taskDetails,
        category: taskCategory,
      };
      onTaskFormSubmit(newItem);
      setTaskDetails("");
    }
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-details">
        Details
        <input
          type="text"
          name="text"
          onChange={e => setTaskDetails(e.target.value)} 
          value={taskDetails}
        />
      </label>
      <label htmlFor="task-category">
        Category
        <select name="category" value={taskCategory} onChange={updateCategory}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
