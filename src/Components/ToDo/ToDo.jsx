import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({toDo, markDone, SetUpdateData, deletedTask}) => {
    return (
        <div >
          {toDo && toDo.length ? "" : "No task "}
          {toDo && toDo
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div className='col taskBg'>
                    <div className={task
                      .status ? "done" : ""}>
                      <span className='taskNumber'>{index + 1}</span>
                      <span className='taskText'>{task.title}</span>
                    </div>
                    <div className='iconsWrap'>
                      <span onClick={() => markDone(task.id)} className='Complated/ not Completed'>
                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                      </span >
                      {task.status ? null : <span title='Edit'
                        onClick={() => SetUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false

                        })}><FontAwesomeIcon icon={faPen} /></span>}

                      <span title='Delete' onClick={() => deletedTask(task.id)}><FontAwesomeIcon icon={faTrashCan} /></span>

                    </div>

                  </div>


                </React.Fragment>
              )
            })}
        </div>
    );
};

export default ToDo;