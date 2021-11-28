import React from 'react';
import './Header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'


const Header = () => {

   const [click, setClick] = useState(false);

   const redirect = () => {
      window.location.href = 'https://quizzerproject.netlify.app'
   }


   const handleClick = () => {
      setClick(!click);
   }
   return (
      <div className="header-container">
         <header className="nav_header">
            <h1 onClick={redirect}>Quizzer</h1>
         </header>

         <div className={click ? "d-flex menu-container" : "d-none menu-container"}>
            <div className="close-container">
            <p onClick={handleClick}>x</p>
            </div>
            <ul className="menu_options">
               <Link to="/"><li>Inicio</li></Link>
               <Link to="/rankingDeporte"><li>Ranking</li></Link>
               <Link to="/HowToPlay"><li>¿Cómo jugar?</li></Link>
            </ul>
         </div>

         <div className="menu-burger-container"> 
         <AiOutlineMenu size={30} className="menu_burger" onClick={handleClick} />
         </div>
      </div>
   )
}

export default Header