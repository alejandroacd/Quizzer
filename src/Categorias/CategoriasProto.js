import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { CgSandClock } from 'react-icons/cg';
import { useCategoria } from '../contexts/CategoriasContext'


const CategoriasProto = (props) => {
const {
    
    switche,
    timer,
    success,

} = useCategoria();


    return (
        <>
          <div>
          <>
                        <div className="contador_timer">
                            <p className='count'><BiCheckCircle className={switche ? 'check animate' : 'check'} /> {props.count}  </p>
                            <p className='timer'><CgSandClock className='clock' /> {timer} </p>
                        </div>
                        <div className='contenedor_pregunta'>
                            <h1> {props.question[0].pregunta} </h1>
                        </div>
                        <div>
                            <ul className="preguntas-deportes">
                                <li id="optn_1" onClick={props.getQuestion}> {props.question[0].option_1}  </li>
                                <li id="optn_2" onClick={props.getQuestion}> {props.question[0].option_2} </li>
                                <li id="optn_3" onClick={props.getQuestion}> {props.question[0].option_3} </li>
                                <li id="correcta" className={success ? 'bg-success' : null} onClick={props.acertada}> {props.question[0].option_correcta} </li>
                            </ul>
                        </div>
                    </>
          </div>
        </>

    )
}


export default CategoriasProto;