import './App.css';
import { useState } from 'react';
import { ListaDeTareas } from './componentes/List';
import { Form2 } from './componentes/Form2';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import { Nav } from './Pages/Nav';





function App() {
  const [tareas, setTareas] = useState([])


  return (
    <BrowserRouter>
    <div className="App body">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/form" element={<Form2 setTareas={setTareas} tareas={tareas} />}></Route>
          <Route path="/tareas" element={<ListaDeTareas setTareas={setTareas} tareass={tareas} />}></Route>
        </Routes>
    </div>
      </BrowserRouter>
      
  );
}

export default App;
        
          

      
