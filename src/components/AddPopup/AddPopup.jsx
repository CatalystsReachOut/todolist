import React from 'react'
import { useNavigate } from 'react-router-dom'
import FetchTime from '../../containers/FetchTime'
import './addpopup.css'


function AddPopup({ setTasks }) {

    const navigateback = useNavigate();
    const navigateforw = useNavigate();

    const handleAddTask = (e) => {
        e.preventDefault();
        setTasks(prev => [...prev, e.target['text'].value])
        navigateforw('/');
    }

    return (
        <div className='todo__add-popup'>
            <div className="todo__add-popup__nav">
                <div className="icon2">
                    <div className="back icon" onClick={() => navigateback('/')}><i className="fa-solid fa-arrow-left"></i></div>
                </div>

            </div>


            <div className="date">
                <FetchTime />
            </div>

            <div className="form-input">
                <form className="task" onSubmit={(e) => handleAddTask(e)}>
                    <div className="text-area">
                        <textarea name="text" placeholder="Add your task"
                        ></textarea>
                    </div>

                    <button type='submit'>Add the task</button>

                </form>
            </div>
        </div>
    )
}

export default AddPopup