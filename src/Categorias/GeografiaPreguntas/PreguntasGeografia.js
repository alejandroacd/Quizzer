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
    const {
        acertadaGeografia,
        getQuestionGeografia,
        count,
        preguntaGeografia,
        messageGeografia,
        timer,
       
    } = useCategoria();

    if (timer === 0) {
        if(count > highScore){
            Axios.put('https://quizzerproject.herokuapp.com/updateGeography', {
                id: user[0]._id,
                highScoreGeography: count
               
            })
        }
     }
 
     useEffect( () => {
       let dbUser = db.filter(x => x.userName === currentUser.displayName);
         setUser(dbUser)
         setHighScore(dbUser[0].highScoreGeography)
 
     }, [currentUser.displayName, db])
   
    return (
         <>
            <div className='preguntas'>
                <h2 className="text-center">Categoría en proceso...</h2>
            </div>
        </>

    )
}

export default PreguntasGeografia;