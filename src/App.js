import './App.css';
import Home from './containers/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddPopup from './components/AddPopup/AddPopup';
import { useState } from 'react';


function App() {

  const [tasks,setTasks] = useState([]);
  
  return (
    <div className="App">
    <BrowserRouter>

      <Routes>
        <Route path= "/" element = {<Home tasks={tasks} setTasks = {setTasks}/>}/>
        <Route path = "/add-task" element = {<AddPopup setTasks={setTasks}/>}/>
      </Routes> 
      
    </BrowserRouter>
    </div>
  );
}

export default App;
