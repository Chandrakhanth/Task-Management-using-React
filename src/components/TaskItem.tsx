
import React from 'react'
import { Task } from '../models/Task'

interface TaskItemProps {
  task: Task
  onDelete: () => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete()
  };

  return (
    <li>
      <span>{task.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem
