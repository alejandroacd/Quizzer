import React, { useState, useEffect } from 'react';
import '../PreguntasStyle.css';
import { useCategoria } from '../../contexts/CategoriasContext'
import { useAuth } from '../../contexts/AuthContext'
import Axios from 'axios'
import FinalMessage from '../finalMessage'
import CategoriasProto from '../CategoriasProto'


//component 
const PreguntasDeportes = () => {

    const { currentUser, db } = useAuth();
    const [user,setUser ] = useState()
    const [highScore, setHighScore] = useState()
    const { acertadaDeportes,
        getQuestionDeportes,
        count,
        preguntaDeportes,
        timer,
        messageDeportes,


    } = useCategoria();

    if (timer === 0) {
       if(count > highScore){
           Axios.put('http://localhost:3001/updateSports', {
               id: user[0]._id,
               highScoreSports: count
              
           })
       }
    }

    useEffect(() => {
      let dbUser =  db.filter(x => x.userName === currentUser.displayName);
        setUser(dbUser)
        setHighScore(dbUser[0].highScoreSports)

    }, [currentUser.displayName, db])


    // JSX
    return (
        <>
            <div className='preguntas'>
                {timer > 0 ?
                    <>
                    <CategoriasProto question={preguntaDeportes} getQuestion={getQuestionDeportes} acertada={acertadaDeportes} count={count} />
                    </>
                    :
                    <>
                    <FinalMessage count={count} message={messageDeportes} />
                    </>
                }

            </div>
           
     
        </>

    )
}

export default PreguntasDeportes;