import React, {useEffect, useState} from 'react'
import task_logo from '../../assets/task-image.jpeg'
import FetchTime from '../../containers/FetchTime'
import Tasks from '../Tasks/Tasks'

import './content.css'

const Content = (props) => {

  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("");
  const [index, setIndex] = useState("");


  const handleEdit = (index) => {
    setVisible(true);
    setIndex(index)
    setInput(props?.tasks[index]);

}

  const updateElement = () => {
    var newTask = props.tasks;
    if(input)
    newTask[index] = input;

    setVisible(false);
    setInput("")
  }
  const handleDelete = (index) => {
    props.setTasks(prev => prev.filter(item => prev[index]!== item))
  }

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
                props.tasks.map((data , index) =>{
                  return <Tasks tasks={data} data={props.tasks} handleEdit={handleEdit} index={index} key={index} handleDelete={handleDelete} setTasks={props.setTasks}/>
             })
            }

            {visible ? <>
              <input type="text" placeholder="enter update" value={input} onChange={(e) => setInput(e.target.value)} />
               <button onClick={() => updateElement()}>Save</button> </> : null }

        </div>

    )
            }



export default Content
