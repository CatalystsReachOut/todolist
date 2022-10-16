import React , {useState} from 'react';
import ReactDOM from 'react-dom';

 export default function Tasks({tasks, index , data, handleEdit,handleDelete})
  {

  return (
    <>
    <div className="container">
     <h1 data-ref = {index}>{tasks}</h1>
        <button onClick={() => handleEdit(index)} >Update Tasks</button>
        <button onClick={()=>handleDelete(index)}>Delete</button>

    </ div>
    </>
  )
}
