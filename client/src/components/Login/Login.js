import React, { useState, useRef } from 'react';
import './Login.css'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'


const Login = () => {



  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    }
    catch {
      setError('Campos con valores incorrectos')
    }

    setLoading(false);
  }

  return (
    <div className="card2">
      <h1 className="text-center"> Iniciar sesión </h1>
       { error ? <div class="alert alert-danger m-0 p-3" role="alert">
        {error}
       </div> : null}
      <form method="POST" action="/login">
        <label >E-mail</label>
        <br />
        <input placeholder='Escribe tu e-mail...' ref={emailRef} type='email' required />
        <label className="mt-4">Contraseña</label>
        <br />
        <input placeholder='Tu contraseña...' ref={passwordRef} type='password' required />
        
        <button className="btn btn-outline-warning mt-4 w-100" onClick={handleSubmit} type="button" disabled={loading}>Iniciar sesión</button>
        <div className="signup_button mt-3">¿No tienes cuenta? <Link to="/Signup"> Regístrate! </Link></div>
      </form>
   
    </div>
  )
}
export default Login