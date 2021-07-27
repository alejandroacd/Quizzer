import React from 'react';
import '../MenuCategorias/Categorias.css'
import { GiSoccerBall } from 'react-icons/gi'
import { GiSecretBook } from 'react-icons/gi'
import { GiEarthAmerica } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Wave from '../../components/Wave'


const Categorias = () => {

    return (
        <div className="all">

            <h1 className="titulo_categorias text-center"> Elige una categoría</h1>
            <div className="contenedor_categories1">
                <div className="categoria_deportes">
                <Link className="link1" to="/deportes">
                <GiSoccerBall className='football-icon'/>
                   <h1>Deportes</h1>
                </Link>
                </div>

                <div className="categoria_historia">
                <Link className="link1" to="/historia">
                <GiSecretBook className='book-icon'/>
                   <h1>Historia</h1>
                </Link>
               </div>
            </div>

            <div className="contenedor_categories2">
                <div className="categoria_geografia">
                    <Link className="link1" to="/geografia">
                    <GiEarthAmerica className='earth-icon'/>
                    <h1>Geografía</h1>
                    </Link>

                </div>
            </div>
            <Wave /> 

        </div>
        
    )
}


export default Categorias