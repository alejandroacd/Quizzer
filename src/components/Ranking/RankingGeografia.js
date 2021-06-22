import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ranking.css'
import RankingProto from './RankingProto'
import Axios from 'axios'



export const RankingGeografia = () => {
    const [rank,setRank] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/dbGeography')
        .then((resp) => {
            setRank(resp.data)
        })
        
    },[])

   
    return (
       <>
       <RankingProto />
       
             {rank.map((x,k) => {
                 return <div className="values" key={k} ><p>{x.userName}</p> <p> {x.highScoreGeography} </p></div>
             })}
      </>
    )
}

export default RankingGeografia