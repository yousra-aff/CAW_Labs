import React, { useState } from 'react';

function Task({ index, task, deleteTask }) {
  const [subtasks, setSubtasks] = useState([]);
  const [showSubtasks, setShowSubtasks] = useState(false);

  const addSubtask = () => {
    const newSubtasks = [...subtasks, `Sub-task ${subtasks.length + 1}`];
    setSubtasks(newSubtasks);
  };

  const markSubtaskDone = (subtaskIndex) => {
    const newSubtasks = [...subtasks];
    newSubtasks[subtaskIndex] = newSubtasks[subtaskIndex] + ' - DONE';
    setSubtasks(newSubtasks);
  };

  return (
    <div className="task">
      <p onClick={() => setShowSubtasks(!showSubtasks)}>
        {task}
        {showSubtasks && (
          <button onClick={addSubtask}>Add Sub-task</button>
        )}
      </p>
      {showSubtasks && (
        <ul>
          {subtasks.map((subtask, subtaskIndex) => (
            <li key={subtaskIndex}>
              {subtask}
              {!subtask.includes('DONE') && (
                <button onClick={() => markSubtaskDone(subtaskIndex)}>
                  DONE
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => deleteTask(index)}>Delete Task</button>
    </div>
  );
}

export default Task;
