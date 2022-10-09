import React from 'react'
import {Semicircle,Content,Footer} from '../../components'

function Home({tasks,setTasks}) {
  return (
    <>
    <Semicircle/>
    <Content tasks={tasks} setTasks={setTasks}/>
    <Footer/>
    </>
  )
}

export default Home