import React, { useState } from 'react'



import "../componentes/List.css"

export const ListaDeTareas = ({tareass, setTareas}) => {

 const [completado, setCompletado] = useState(false)

 const manejarComplete = () => {
    setCompletado(!completado)
 }

    const borrarTarea = (id) => { setTareas(previoState => {
    const re = [...previoState]
    re.splice(id,1)
    return re
  })}


  return (
    <ul id="lista-tareas">
      {tareass.map((tarea, i) => 
      <Tarea key={id} completado={completado} manejarComplete={manejarComplete} descripcion={tarea.descripcion} prioridad={tarea.prioridad} borrarTarea={borrarTarea} id={i}/>)}
    </ul>
  )
}

const Tarea = ({descripcion, prioridad, borrarTarea, id, manejarComplete, completado}) => {
  return (
      <li className={`${prioridad}`}>
        <span className={completado? "completado " : ""}>{descripcion}</span>
        <button onClick={(e) => borrarTarea(id)}> Borrar </button>
        {completado ? <button onClick={manejarComplete}> Descompletar </button>
: <button onClick={manejarComplete}> Completado </button>
        } 
      </li>    
  )
}