import React from 'react'
import TaskItem from './TaskItem'
import { Task } from '../models/Task' 
// import './App.css' 

interface TaskListProps {
  tasks: Task[]
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={ () => onDelete(task.id)} />
        ))}
      </ul>
    </div>

  )
}

export default TaskList
