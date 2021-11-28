import React from 'react';
import { Link } from 'react-router-dom'
import {useRanking} from '../../contexts/RankingContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiSoccerBall } from 'react-icons/gi'
import { GiSecretBook } from 'react-icons/gi'
import { GiEarthAmerica } from 'react-icons/gi'

export const RankProto = () => {
   const { cambiarCategoria,categorie } = useRanking();
   
    return (
        <>
             <div className="optiones_ranking">
             <h1 className='text-center rank_title'> Ranking {categorie} </h1>
                <div className="buttons_ranking">
                 <Link onClick={() => cambiarCategoria("#Deportes")} to="/rankingDeporte"><button className="btn btn-outline-success">Deportes <GiSoccerBall /></button></Link>
                 <Link onClick={() => cambiarCategoria("#Historia")} to="/rankingHistoria"><button className="btn btn-outline-warning">Historia <GiSecretBook /></button></Link> 
                 <Link onClick={() => cambiarCategoria("#Geografia")} to="/rankingGeografia"><button className="btn btn-outline-primary">Geografía <GiEarthAmerica /></button></Link>
                 </div>
             
             <div className="keys">
                 <h2>Name</h2>
                 <h2>High Score</h2>
             </div> 
             </div>

    </>
        
    )
}

export default RankProto;