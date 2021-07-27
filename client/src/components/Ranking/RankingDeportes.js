import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ranking.css'
import Axios from 'axios';
import RankingProto from './RankingProto'
import { GiSoccerBall } from 'react-icons/gi'


const RankingDeportes = () => {
    const [rank,setRank] = useState([])

    useEffect(() => {
        Axios.get('https://quizzerproject.herokuapp.com/dbSports')
        .then((resp) => {
            setRank(resp.data)
        })
        
    },[])
  

    return (
       <>
       <RankingProto />

             {rank.map((x,k) => {
                 return <div className="values" key={k} ><p>{x.userName}</p> <p>{x.highScoreSports} </p></div>
             })}
      </>
    )
}

export default RankingDeportes;