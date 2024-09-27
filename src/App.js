import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

import AddTasksForm from './components/AddTasksForm.jsx';

import ToDo from './components/ToDo.jsx';


function App() {
  
  const[toDo, setToDo] = useState([]);
  
  const[newTask, setNewTask] = useState('');
  const[updateData, setUpdateData] = useState('');


  // const disableButton = () => {
  //   buttonRef.current.disabled = true;
  // }


  const addTask = () => {
    if(newTask){
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }

      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }


  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if(task.id === id) {
        return ({...task, status: !task.status})
      }
      return task;
    })
    setToDo(newTask);
  }

  const cancelUpdate = () => {
    setUpdateData('');
  }

  const editTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }

    setUpdateData(newEntry);
  }

 


  const updateTask = () => {

    let filterRecords = [...toDo].filter( task => task.id !== updateData.id);   
    let updatedData = [...filterRecords, updateData]

    setToDo(updatedData);
    setUpdateData('');
    
  }


  return (
    <div className="container App">
      
    <br /> <br />
    <h2>To Do List</h2>
    <br /> <br />


    
        <AddTasksForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        />


    
    {toDo && toDo.length ? '' : 'No Tasks...'}

   <ToDo 
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
      updateData={updateData}
      editTask={editTask}
      cancelUpdate={cancelUpdate}
      updateTask={updateTask}
    />
    

    


    </div>
  );
}

export default App;
