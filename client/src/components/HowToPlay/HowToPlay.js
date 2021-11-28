import React from 'react';
import '../HowToPlay/HowToPlay.css'
import YellowWave from './YellowWave'


const HowToPlay = () => {
    return (
        <>
        <div className='howtoplay_container'>
            <h1>¿Cómo jugar?</h1>
        <p>El juego se centra en conseguir la mayor cantidad de respuestas correctas en 60 segundos.
        Al final, puedes invitar a un amigo a jugar, y mirar tu posición en el ranking.
        </p>
        </div> 

        <YellowWave />
        </>
    )
}

export default HowToPlay;