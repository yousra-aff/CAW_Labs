
import React, { useState } from 'react';
import './styles.css'; 

function NewTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;


