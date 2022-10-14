const tasks = [
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
]

const Tasks = () => {
  return (
    <>
        {tasks.map(task => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks