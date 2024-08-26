import React from 'react';


interface Task {
    id: number
    title: string
    description: string
    dueDate: string
    status: 'Pending' | 'Completed' | 'In Progress'
  }

interface TaskDetailsProps {
  task: Task
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task }) => {
  return (
    <div className="color-1">
      <h2>Task Details</h2>
      <p>ID: {task.id}</p>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      {/* <p>Due Date: {task.dueDate}</p> */}
      <p>Status: {task.status}</p>
    </div>
  )
}

export default TaskDetails
