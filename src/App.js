import './App.css';
import { useState } from 'react';
import { ListaDeTareas } from './componentes/List';
import { Form2 } from './componentes/Form2';



function App() {
  const [tareas, setTareas] = useState([])

  return (
    <div className="App body">
      <div className="box">
        <h1>¡Lista de tareas!</h1>
          <Form2 setTareas={setTareas} tareas={tareas}/>
        <h3>Tareas</h3>
        {tareas.length > 0 ?
        <ListaDeTareas setTareas={setTareas} tareass={tareas}/> :
        <p>Parace que no hay nada por aquí</p> 
}
      </div>
    </div>
  );
}

export default App;

      
