import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit, onDetails, handleChange }) {
  const [taskCategory, setTaskCategory] = useState("Code");
  const [taskDetails, setTaskDetails] = useState(""); // Add state for task details

  // Adds event handler for onDetails and handleChange
  const options = categories
    .filter(cat => cat !== "All")
    .map(cat => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ));

  //handles category selection
  function updateCategory(e) {
    setTaskCategory(e.target.value);
  }

//handles form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (taskDetails.trim() !== "") { // Check taskDetails instead of onDetails
      const newItem = {
        text: taskDetails,
        category: taskCategory,
      };
      onTaskFormSubmit(newItem);
    }
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={e => setTaskDetails(e.target.value)} // Update taskDetails state
          value={taskDetails}
        />
      </label>
      <label>
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
