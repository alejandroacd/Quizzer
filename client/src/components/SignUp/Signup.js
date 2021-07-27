import React, { useState, useRef } from 'react';
import './Signup.css'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import Axios from 'axios';


 

const Signup = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    

     await signup(emailRef.current.value,passwordRef.current.value,usernameRef.current.value)
     .then(() => {
      Axios.post("https://quizzerproject.herokuapp.com/insert", {
        userName: usernameRef.current.value
      })
     })
     .then(() =>{
      if(passwordRef.current.value !== passwordConfirmRef.current.value){
        setError('password does not macth')
    } else {
      setTimeout(() => {
        window.location.href = 'http://localhost:3000/'
      },1500)
    }})
    .catch((error) =>{
       setError(error.message)
     })
    
    setLoading(false);  
  }

  return (
    <div className="card1  d-flex">
      <h1 className="text-center">Sign up</h1>

      { error ? <div class="alert alert-danger m-0 p-2" role="alert">
        {error}
      </div> : null}
      <form method="POST" action="/insert">
        <label >e-mail</label>
        <br />
        <input placeholder='Escribe tu e-mail...' ref={emailRef} type='email' required />
        <label className='mt-4'>username</label>
        <br />
        <input placeholder='Your username' ref={usernameRef} type='text' required />
        <label className="mt-4">Password</label>
        <br />
        <input placeholder='Tu contraseña...' ref={passwordRef} type='password' required />
        <label className="mt-4">Confirm your password</label>
        <br />
        <input placeholder='Confirma tu contraseña' ref={passwordConfirmRef} type='password' required />
        <button className="btn btn-outline-info mt-4 w-100" onClick={handleSubmit} type="submit" disabled={loading}>Sign up</button>
        <div className="mt-3">already have an account?  <Link to="/Login">Login</Link></div>

      </form>
    </div>
  )
}
export default Signup;