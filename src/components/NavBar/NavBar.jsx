import React from 'react'
import "./navBar.css"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
     <div>
        <ul className="navbarItenAlig ">
            
            <NavLink className="navbarItemText" to={'/'} >Inicio</NavLink>
        
        
            <NavLink className="navbarItemText" to={'categoria/Venta'}>Venta</NavLink> 


            <NavLink className="navbarItemText" to={'categoria/Alquiler'}>Alquiler</NavLink>       


            <NavLink className="navbarItemText" to={'categoria/Tasaciones'}>Tasaciones</NavLink>       
        

            <NavLink className="navbarItemText" to={'categoria/Servicios'}>Servicios</NavLink>       

        </ul>
     </div>
    </>
   
  )
}

export default NavBar