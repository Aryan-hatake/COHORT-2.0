import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RiDeleteBinLine } from '@remixicon/react'
import { RiEditLine } from '@remixicon/react'
import './App.css'
import axios from 'axios'

function App() {

  const [Tasks, setTasks] = useState([{ task: "task 1", time: "00:00" }])


  const [Update, setUpdate] = useState({ update: false, id: null })

  const fetchTask = async () => {
    const FetchedTask = await axios.get("http://localhost:3000/api/task")

    setTasks(FetchedTask.data.alltask)
  }

  const createTask = async (e) => {
    e.preventDefault()
    const { task, time } = e.target.elements

    if (!Update.update) {
      await axios.post("http://localhost:3000/api/task", {
        task: task.value,
        time: time.value
      })
    }

    if (Update.update) {


      if (task.value.trim() !== '' && time.value.trim() === '') {
        await axios.patch(`http://localhost:3000/api/task/${Update.id}`, {
          task: task.value.trim()
        });
      }
      else if (task.value.trim() === '' && time.value.trim() !== '') {
        await axios.patch(`http://localhost:3000/api/task/${Update.id}`, {
          time: time.value.trim()
        });
      }
      else {
        await axios.patch(`http://localhost:3000/api/task/${Update.id}`, {
          task: task.value.trim(),
          time: time.value.trim()
        });
      }

      setUpdate({ update: false, id: null })
    }

    fetchTask()

    task.value = ''
    time.value = ''

    task.style.border = 'none'
    time.style.border = 'none'
  }

  const deleteTask = async (id) => {

    await axios.delete("http://localhost:3000/api/task/" + id);
    fetchTask()
  }

  const updateTask = async (id) => {
    const task = document.querySelector("input[name='task']");
    const time = document.querySelector("input[name='time']");
    time.style.border = '2px solid white'
    task.style.border = '2px solid white'

    setUpdate({ update: true, id: id })

    fetchTask()


  }

  useEffect(() => {
    fetchTask()
  }, [])

  return (
    <>
      <form onSubmit={createTask}>
        <input name='task' type="text" placeholder='Enter Task' />
        <input name='time' type="text" placeholder='Enter Time' />
        <div><button>Submit</button></div>
      </form>
      <div className="taskCont">

        {Tasks.map((e, _) => {
          return <div className='task'>
            <h1>{e.task}</h1>
            <h3>{e.time}</h3>
            <div className="icons">
              <RiDeleteBinLine id={e._id} onClick={() => { deleteTask(e._id) }} />
              <RiEditLine onClick={() => { updateTask(e._id) }} />
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default App
