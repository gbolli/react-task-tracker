import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
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

  return (
    <div className="container">
      <Header />
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
