import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [idPool, setIdPool] = useState(4)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
      const getTasks = async () => {
          const tasksFromServer = await fetchTasks()
          setTasks(tasksFromServer)
      }
      getTasks()
      // need to pass dependencies []
  }, [])

  // Fetch tasks
  const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return data
  }

  // Delete Task
  const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'DELETE'
      })
      setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
      setTasks(tasks.map(task => task.id === id ? task.reminder = { ...task, reminder: !task.reminder} : task))
  }

  // Add Task
  const addTask = (task) => {
      const id = idPool
      setIdPool(idPool+1)
      const newTask = { id, ...task }
      setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAddButton={!showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ? 
        (<Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder}
        />) :
        ('No tasks to show')
      }
    </div>
  )
}

export default App
