
import { UncontrolledCarousel } from 'reactstrap';
import React from 'react';
import './App.css';
import { Fade } from 'react-bootstrap';
import { useState } from 'react';
import UpdateTask from './Components/UpdateTask/UpdateTask';
import AddTaskForm from './Components/AddTAskForm/AddTaskForm';
import ToDo from './Components/ToDo/ToDo';

function App() {
  // task todo list State
  const [toDo, setToDo] = useState([
    { "id": 1, "title": "Task 1", "status": false },
    { "id": 2, "title": "Task 2", "status": false }
  ])
  // 
  // Team State 
  const [newTask, setNewTask] = useState("");
  const [updateData, SetUpdateData] = useState("")
  // 
  // addTask
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask("");
    }

  }
  // deleted task
  const deletedTask = (id) => {
    const newTask = toDo.filter((task) => task.id !== id)
    setToDo(newTask)

  }
  // markDone  an done and complete
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })

      }
      return task;
    })
    setToDo(newTask)
  }
  // 
  // cancel uupdate
  const cancelUpdate = () => {
    SetUpdateData("")
  }
  // 
  // changeTask and update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    SetUpdateData(newEntry)

  }
  // 
  // Update
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
    let updateObject = [...filterRecords, updateData]
    setToDo(updateObject)
    SetUpdateData("")

  }

  return (
    <div className="">
    
      {/* 
      
      */}

      <div className='mx-3 mx-lg-5'>
        <h1 className='text-center m-4'>Design a simple To-Do List App
</h1>
        <br />
        <br />

        {
          updateData && updateData ? (
            <>
              {/* Update task */}
              <UpdateTask
                updateTask={updateTask}
                cancelUpdate={cancelUpdate} changeTask={changeTask} updateData={updateData}></UpdateTask>
              <br />
              {/* ------------- */}
            </>
          )
            :
            (
              <>
                {/* Add Task */}
                <AddTaskForm
                  setNewTask={setNewTask} addTask={addTask}
                  newTask={newTask}
                />

                <br />
                {/* ---------------------- */}
              </>
            )
        }
        <ToDo
          toDo={toDo}
          markDone={markDone}
          SetUpdateData={SetUpdateData} deletedTask={deletedTask}
        />

      </div>

    </div>
  );
}

export default App;
