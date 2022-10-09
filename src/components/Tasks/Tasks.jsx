import React from 'react'

function Tasks({task,setTasks,index}) {

  const handleDelete = () => {
    setTasks(prev => prev.filter(item => prev[index]!== item))
  }
  return (
    <>
    <h1 data-ref = {index}>{task}</h1>
    <button onClick={()=> handleDelete(index)}>Delete</button>
    </>
  )
}

export default Tasks