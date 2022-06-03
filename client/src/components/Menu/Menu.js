import React, { useState } from 'react';
import './Menu.css';
import image from '../../images/jupitert.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import Wave from '../Wave'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { GiStarsStack } from 'react-icons/gi'

const Menu = () => {

  const { currentUser, logout } = useAuth();
  const [lightmode, setLightmode] = useState(true);

 
  const handleChange = () => {

    setLightmode(!lightmode)
    if (lightmode === false) {
      document
        .getElementsByClassName('App')[0]
        .setAttribute('class', 'App darkmode')

      document.getElementsByTagName('html')[0].style.backgroundColor = "#0e1111"
      document.getElementsByTagName('html')[0].style.color = "white"


    }
    if (lightmode === true) {
      document
        .getElementsByClassName('App')[0]
        .setAttribute('class', 'App lightmode')

      document.getElementsByTagName('html')[0].style.backgroundColor = "white"
      document.getElementsByTagName('html')[0].style.color = "#0e1111"
    }
    console.log(lightmode)

  }

  const handleLogout = async () => {
    await logout();
  }



  return (
    <>


      {currentUser ? <h2 className='user_title'> Hola! {currentUser.displayName} <GiStarsStack className="stars" /> </h2> :
       <div className="cardt border-secondary">
       <div className="card-header" > <AiOutlineInfoCircle /> Para poder jugar necesitás iniciar sesión (registrarte te tomará segundos)</div>
     
     </div> }


      <div className='menuContainer'>
        <div className='menuOptions'>
          <ul>
            {currentUser ?
              <Link to="/categorias"><li> Nueva Partida </li></Link> :
              <Link to="/login"><li>Iniciar sesión / registrarse </li></Link>}

            <Link to="/Faq"><li> FAQ  </li></Link>
            {lightmode ? <li onClick={handleChange}> Light mode </li> :
              <li id="switche__btn" onClick={handleChange}> Dark mode </li>}
            {currentUser ? <li onClick={handleLogout}> Cerrar sesión </li> : <Link to="/rankingDeporte"> <li> Ranking</li></Link>}

          </ul>
        </div>

        <img className='jupitert' src={image} alt
          ="logo"></img>

      </div>
      <Wave />
    </>
  )
}

export default Menu;