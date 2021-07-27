import React, {useEffect, useState} from 'react';
import '../PreguntasStyle.css';
import { useCategoria } from '../../contexts/CategoriasContext'
import Axios from 'axios'
import { useAuth } from '../../contexts/AuthContext'
import FinalMessage from '../finalMessage'
import CategoriasProto from '../CategoriasProto'



const PreguntasGeografia = () => {

    const { currentUser, db } = useAuth();
    const [user,setUser ] = useState()
    const [highScore, setHighScore] = useState()


   
    return (
         <>
            <div className='preguntas'>
                <h2 className="text-center">Categoría en proceso...</h2>
            </div>
        </>

    )
}

export default PreguntasGeografia;