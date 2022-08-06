import '../App.css';
import { useNavigate } from "react-router-dom";



function Home() {
  const navigate = useNavigate()

  return (
    <div className="App body">
        <div className=''>
          <h1>¡Bienvidos!</h1>
          <button onClick={() => navigate("/form")}>Agregar tareas</button>
          <button onClick={() => navigate("/tareas")}>Lista de Tareas</button>
        </div>
    </div>
  );
}

export default Home;