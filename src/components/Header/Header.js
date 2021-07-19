import React from 'react';
import './Header.css'
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
 


const Header = () => {

   const [click, setClick] = useState(false);
   
   const redirect = () => {
      window.location.href = 'https://quizzerproject.netlify.app'
   }
  

   const handleClick = () => {
      setClick(!click);
   }
   return (
      <div className='headerContainer'>
         <header className='navHeader'>
            <h1 onClick={redirect}> Quizzer </h1>
            {click ? null : <nav>
               <FiMenu onClick={handleClick} className='menu-mobile-bar'/>
               
            </nav>
            }

         </header>

          
         { click ? <div className='container'>
            <p onClick={handleClick}><strong>X</strong></p>
            <ul>

               <Link to="/" onClick={handleClick} style={{ textDecoration: 'none' }} ><li>Inicio</li></Link>
               <hr></hr>
               <Link to="/rankingDeporte" onClick={handleClick} style={{ textDecoration: 'none' }} ><li>Ranking</li></Link>
               <hr></hr>
               <Link to="/howtoplay" onClick={handleClick} style={{ textDecoration: 'none' }} > <li>¿Cómo jugar?</li> </Link>
               <hr></hr>
   

            </ul>
         </div> : null}



      </div>

   )
}

export default Header;