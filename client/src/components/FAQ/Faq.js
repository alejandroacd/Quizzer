import React from 'react';
import './Faq.css';
import VioletWave from './VioletWave';
import { Link } from 'react-router-dom'



const Faq = () => {
    return (

        <>
        <div className="faq-container">
            <h2>FAQ</h2>
            <div className="card">
                <h1>¿Qué es Quizzer?</h1>
                <p>Es una app para jugar a responder preguntas de una categoría a elección con un cronómetro. Creada con ReactJs,MongoDB y Firebase Authentication para fines prácticos.
                </p>
            </div>
            <div className="card">
                <h1>¿Cómo se juega?</h1>
                <p>En la <Link to="/"> página principal</Link>, selecciona 'Partida nueva', elige una categoría,
                y trata de responder la mayor cantidad de preguntas correctamente en 60 segundos.</p>
            </div>
            <div className="card">
                <h1>¿Quiénes pueden jugar Quizzer?</h1>
                <p>Todo el que acepte el reto :)</p>
           </div>
        
        </div>

        <VioletWave/>
        </>
    )
}


export default Faq;