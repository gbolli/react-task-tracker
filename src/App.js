import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [idPool, setIdPool] = useState(4)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'doc appt',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'think about life',
        day: 'Feb 6th at 2:30pm',
        reminder: false
    },
    {
        id: 3,
        text: 'run to the mailbox',
        day: 'Feb 7th at 2:30pm',
        reminder: true
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
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
      <Header />
      <AddTask onAdd={addTask} />
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
