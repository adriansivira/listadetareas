import React from 'react'
import "./Home.css"
import {useNavigate} from "react-router-dom";


export const Nav = () => {
    const navigate = useNavigate()

  return (
    <nav>
        <a onClick={() => navigate("/")}>Home</a>   
    </nav>
  )
}
