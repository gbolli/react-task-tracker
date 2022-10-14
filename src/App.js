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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
