import React, { useState } from "react";
import PropTypes from 'prop-types';


const AddTasksForm = ({ newTask, setNewTask, addTask }) => {

   

    return (
        <>
          {/* Add task form */}
      <div className='row'>
        <div className='col'>
          <input value={newTask} onChange={ (e) => setNewTask(e.target.value)} className='form-control form-control-lg' placeholder="Enter a task" id="addForm"></input>

        </div>
        <div className='col-auto'>
          <button onClick={addTask} className='btn btn-lg btn-success' id="addBtn">
            Add Task
          </button>
        </div>
      </div>
      <br />
      </>
    )
}

AddTasksForm.propTypes = {
    value: PropTypes.string
}

export default AddTasksForm;