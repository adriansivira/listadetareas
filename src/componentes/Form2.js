import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"


import "../componentes/form2.css"

export const Form2 = ({setTareas, tareas}) => {
  const [descripcion, setDescripcion] = useState('')
  const [prioridad, setPrioridad] = useState('')
  const navigate = useNavigate()

  return (
    <div>
      <form action="javascript:void(0);">
        <input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea" 
        onChange={(e) => setDescripcion(e.target.value)}/>
          <select name="prioridad" id="prioridad" onChange={(e) => setPrioridad(e.target.value)}>
            <option value="" disabled selected>Prioridad</option>
            <option value="a_prioridad-baja">baja</option>
            <option value="b_prioridad-media">media</option>
            <option value="c_prioridad-alta">alta</option>
          </select>
        <button id="agregar" onClick={(e) => setTareas(
          [...tareas, {prioridad: prioridad,
          descripcion: descripcion
          
      }]
      )}>Agregar!</button>
      </form>
      <button onClick={() => navigate("/tareas")}>Ir a lista de tareas</button>
    </div>

  )
}




