import React from 'react'
import task_logo from '../../assets/task-image.jpeg'
import FetchTime from '../../containers/FetchTime'
import Tasks from '../Tasks/Tasks'

import './content.css'

const Content = (props) => {

    return (
        <div className='todo__content'>

            <FetchTime />

            {!props.tasks.length ? (
                <>
                    <div className="todo__content__task-image">
                        <img src={task_logo} alt='task-logo' />
                    </div>

                    <div className="todo__content__text">
                        <h1>NO TASK</h1>
                        <p>Add your to-dos and manage your tasks</p>
                    </div>
                </>)

                :
             props.tasks.map((task,index) => {
                 return <Tasks task={task} key = {index} setTasks = {props.setTasks} index={index}/>
             })
            }
        </div>
    )
            }



export default Content

