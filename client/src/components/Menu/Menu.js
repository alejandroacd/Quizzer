import React, { useState } from 'react';
import './Menu.css';
import image from '../../images/jupitert.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import Wave from '../Wave'
const Menu = () => {

  const { currentUser, logout } = useAuth();
  const [lightmode, setLightmode] = useState(true);
 
  const handleChange = () => {

    setLightmode(!lightmode)
    if (lightmode === false) {
      document
        .getElementsByClassName('App')[0]
        .setAttribute('class', 'App')
    }
    if (lightmode === true) {
      document
        .getElementsByClassName('App')[0]
        .setAttribute('class', 'App lightmode')
    }

    console.log(lightmode)

  }

  const handleLogout = async () => {
    await logout();
  }



  return (
    <>
      {currentUser ? <h2 className='user_title'> Hola! {currentUser.displayName} </h2> : null}


      <div className='menuContainer'>
        <div className='menuOptions'>
          <ul>
              { currentUser ?
              <Link to="/categorias"><li> Nueva Partida </li></Link> :
              <Link to="/login"><li>Iniciar sesión / registrarse </li></Link> }

              <Link to="/rankingDeporte"><li>Ranking</li></Link>
              {lightmode ? <li onClick={handleChange}> Light mode </li> :
              <li id="switche__btn" onClick={handleChange}>Dark mode</li>}
              {currentUser ? <li onClick={handleLogout}>LOG OUT</li> : <Link to="/Faq"> <li> FAQ </li></Link>}
             
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