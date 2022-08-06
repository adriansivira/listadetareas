import React, { useState } from 'react'



import "../componentes/List.css"
import {useNavigate} from "react-router-dom";


export const ListaDeTareas = ({tareass, setTareas}) => {

  
  const borrarTarea = (id) => { setTareas(previoState => {
    const re = [...previoState]
    re.splice(id,1)
    return re
  })}
  
  const navigate = useNavigate()
  
  const ordenar = (a, b) => {
    if (a.prioridad > b.prioridad) {return 1}
    if (a.prioridad < b.prioridad) {return -1}
    return 0
  }

  const ordenarTareas = tareass.sort(ordenar).reverse()

  return (
    <ul id="lista-tareas">
      {ordenarTareas.map((tarea, i) => 
      <Tarea descripcion={tarea.descripcion} prioridad={tarea.prioridad} borrarTarea={borrarTarea} id={i}/>)}
      <button onClick={() => navigate("/form")}>Ir a Form</button>
    </ul>
  )
}

const Tarea = ({descripcion, prioridad, borrarTarea, id}) => {
  const [completado, setCompletado] = useState(false)
  const [editado, setEditado] = useState(false)
  
  const manejarComplete = () => {
     setCompletado(!completado)
  }

  const manejarEdit = () => {
    setEditado(!editado)
  }

  return (
    <div>
      <li className={`${prioridad}`}>
        {editado? <input type="text" name="" value=""/> : null}
        {editado? null : <span className={completado? "completado " : ""}>{descripcion}</span>}
        <button onClick={(e) => borrarTarea(id)}> Borrar </button>
        {completado ? <button onClick={manejarComplete}> Descompletar </button>
: <button onClick={manejarComplete}> Completado </button>
        } 
        <button onClick={manejarEdit}> Editar </button>
      </li> 
    </div>
         
  )
}




