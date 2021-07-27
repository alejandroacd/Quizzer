import React, {useState, useEffect} from 'react';
import '../PreguntasStyle.css';
import { useCategoria } from '../../contexts/CategoriasContext'
import { useAuth } from '../../contexts/AuthContext';
import Axios from 'axios'
import FinalMessage from '../finalMessage'
import CategoriasProto from '../CategoriasProto'

const PreguntasHistoria = () => {

    const { currentUser, db } = useAuth();
    const [user,setUser ] = useState()
    const [highScore, setHighScore] = useState()
    const { 
         acertadaHistoria,
         getQuestionHistoria,
         preguntaHistoria,
         count,
         timer,
         messageHistoria,
         
         } = useCategoria();

         if (timer === 0) {
            if(count > highScore){
                Axios.put('http://localhost:3001/updateHistory', {
                    id: user[0]._id,
                    highScoreHistory: count
                   
                })
            }
         }
     
         useEffect(() => {
           let dbUser = db.filter(x => x.userName === currentUser.displayName);
             setUser(dbUser)
             setHighScore(dbUser[0].highScoreHistory)
     
         }, [currentUser.displayName, db])

         return (
            <>
               <div className='preguntas'>
                   {timer > 0 ?
                       <>
                       <CategoriasProto question={preguntaHistoria} getQuestion={getQuestionHistoria} acertada={acertadaHistoria} count={count} />
                       </>
                       :
                       <>
                       <FinalMessage count={count} message={messageHistoria} />
                       </>
                   }
   
               </div>
           </>
   
       )
}

export default PreguntasHistoria