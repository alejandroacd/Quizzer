import React from 'react';
import { Link } from 'react-router-dom'


const FinalMessage = (props) => {
    return (
        <div className="finalMessage">

        <h1 className="text-center"> FIN!</h1>
        <p className="text-center">Tu puntuación es: {props.count} </p>
        <a href={props.message} ><button className="btn btn-outline-success btn-block" type="button">Desafiar un amigo</button></a>
        <Link to="/"><button className='btn btn-block bg-success'>Volver al inicio</button></Link>
        <Link to="/rankingDeporte"><button className='btn btn-block bg-warning'>Ranking</button></Link>
    </div>
    )
}


export default FinalMessage;