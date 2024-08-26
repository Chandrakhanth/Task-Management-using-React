import React, { useState } from 'react';
import { Task } from '../models/Task';

interface TaskFormProps {
  onCreate: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onCreate }) => {
  const [task, setTask] = useState<Task>({
    id: 0, // Generate a unique ID
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(task);
    setTask({
      id: 0, // Generate a unique ID
      title: '',
      description: '',
      dueDate: '',
      status: 'Pending',
    });
  };

  return (
    <div className="task-form">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            id="id"
            value={task.id}
            onChange={(e)=> setTask({...task, id: parseInt(e.target.value,10)})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={task.status}
            onChange={(e) => setTask({ ...task, })}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In progress</option>
          </select>
        </div>
        {/*... (rest of the form) */}
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
