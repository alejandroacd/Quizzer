import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ranking.css'
import RankingProto from './RankingProto'
import Axios from 'axios';

export const RankingHistoria = () => {
    const [rank,setRank] = useState([])

    useEffect(() => {
        Axios.get('https://quizzerproject.herokuapp.com/dbHistory')
        .then((resp) => {
            setRank(resp.data)
        })
        
    },[])

    return (
        <>
            <RankingProto />

            {rank.map((x, k) => {
                return <div className="values" key={k} ><p>{x.userName}</p> <p>{x.highScoreHistory} </p></div>
            })}

        </>
    )
}

export default RankingHistoria