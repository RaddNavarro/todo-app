import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';



const ToDo = ({ toDo, markDone, setUpdateData, deleteTask, updateData, editTask, cancelUpdate, updateTask }) => {
  const [isEditMode, setIsEditMode] = useState(true);
  const handleEdit = () => {
    updateTask()
    setIsEditMode(false);
  }


  
    return (
        <>
        {toDo && toDo
            .sort((a, b) => a.id > b.id ? 1  : -1)
            .map( (task, index) => {
              return (
                <React.Fragment key={task.id}>
        
                  <div className='col taskBg'>

                  
        
                    <div className='iconsWrap'>
                        

                        {isEditMode && task.id === updateData.id ? null : (<span title='Completed/Not'
                        onClick={(e) => markDone(task.id)}  >
                        <FontAwesomeIcon icon={faCircleCheck} />
                        
                      </span> ) }
                       
                      
                      
                      {task.status ? null: (
                        
                        <span title='Edit'
                          
                          onClick={() => {setUpdateData({ id: task.id, title: task.title, status: task.status ? true : false }) ; {setIsEditMode(true)}} 
                          }>
                        <FontAwesomeIcon icon={faPen} />
                        </span>
                      )}
                      {isEditMode && task.id === updateData.id ? null : (<span title='Delete'
                        onClick={() => deleteTask(task.id)}  >
                        <FontAwesomeIcon icon={faTrashCan} />
                        
                      </span>)}
                      
                      
                      


                    </div>
        
                  
                  {isEditMode && task.id === updateData.id ? (<>
                    <div className='row'>
                    
                    <div className='col'>
                      <input value={ {updateData} && updateData.title } onChange={ (e) => editTask(e)} className='form-control form-control-lg' id="updateForm"></input>
                      
                    </div>
                    <div className='col-auto'>
                      <button onClick={handleEdit}className='btn btn-lg btn-success mr-20' id="saveBtn">Save</button>
                      <button onClick={{cancelUpdate} && handleEdit} className='btn btn-lg btn-warning' id="cancelBtn">Cancel</button>

                    </div>
                  </div>
                  <br />
                  </>): (<div className={task.status ? 'done' : ''}>
                      <span className='taskNumber'>{index + 1}</span>
                      <span className='taskText' >{task.title}</span>
                    </div>)}
                    </div>
                  
                </React.Fragment>
              )
            } )}
            </>
    )
}

export default ToDo;