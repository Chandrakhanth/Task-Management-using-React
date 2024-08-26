import React, { useState } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { Task } from './models/Task'
import './App.css' 
import './index.css'

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCreate = (task: Task) => {
    setTasks([...tasks, task])
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>Task Management Application</h1>
        <TaskForm onCreate={handleCreate} />
        <TaskList tasks={tasks} onDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default App
