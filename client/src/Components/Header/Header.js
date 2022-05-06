import React from 'react'
import { AiFillClockCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import "./header.css"
import axios from 'axios';
export const Header = () => {
const user = localStorage.getItem("token");
const navigate = useNavigate();
const handleLogout = async() => {
    try {
      const url = "http://localhost:5000/api/auth/logout";
	     await axios.get(url,{
        headers:{
          "x-access-token":localStorage.getItem('token')
        }
      }).then((response)=>{
        localStorage.removeItem("token");
        navigate("/login")
        window.location.reload();
      })
      
    } catch (error) {
      
    }
  
    // window.location.reload();

};
  return (<div className='nav'>
      <div className='logo'>
          <a href='/'>
          <AiFillClockCircle/>
          </a>
          
      </div>
        <div className='buttons'>
      {user ? (
          <a className="button_icon" onClick={handleLogout}>Logout</a>
      ):(
          <div>
        <a className="button_icon" href='/signup' >signup</a>
        <a className="button_icon" href='/login'>Login</a>
        </div>
      ) }
      </div>
    

  </div>
  )
}
