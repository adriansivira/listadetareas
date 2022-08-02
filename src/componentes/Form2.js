import React from 'react'
import { useState } from 'react'

import "../componentes/form2.css"

export const Form2 = (props) => {
  const [descripcion, setDescripcion] = useState('')
  const [prioridad, setPrioridad] = useState('')

  return (
    <form action="javascript:void(0);">
      <input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea" onChange={(e) => setDescripcion(e.target.value)}/>
        <select name="prioridad" id="prioridad" onChange={(e) => setPrioridad(e.target.value)}>
          <option value="" disabled selected>Prioridad</option>
          <option value="prioridad-baja">baja</option>
          <option value="prioridad-media">media</option>
          <option value="prioridad-alta">alta</option>
        </select>
      <button id="agregar" onClick={(e) => props.setTareas(
        [...props.tareas, {prioridad: prioridad,
        descripcion: descripcion
        
    }]
    )}>Agregar!</button>
    </form>
  )
}




