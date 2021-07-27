import React, { useContext, useState, createContext, useEffect } from 'react';
import DataPreguntasDeportes from '../Categorias/DeportesPreguntas/DataPreguntasDeportes'
import DataPreguntasHistoria from '../Categorias/HistoriaPreguntas/DataPreguntasHistoria'
import DataPreguntasGeografia from '../Categorias/GeografiaPreguntas/DataPreguntasGeografia'



const CategoriasContext = createContext();
export const useCategoria = () => {
    return useContext(CategoriasContext)
}

export const CategoriasProvider = ({ children }) => {
    
    const [timer, setTimer] = useState(60);
    let randomNumberDeportes = Math.floor(Math.random() * DataPreguntasDeportes.length);
    let randomNumberHistoria = Math.floor(Math.random() * DataPreguntasHistoria.length);
    let randomNumberGeografia = Math.floor(Math.random() * DataPreguntasGeografia.length);
    const [switche, setSwitche] = useState(false)
    const [count, setCount] = useState(0)
    const [preguntaDeportes, setPreguntaDeportes] = useState([DataPreguntasDeportes[randomNumberDeportes]])
    const [preguntaHistoria, setPreguntaHistoria] = useState([DataPreguntasHistoria[randomNumberHistoria]])
    const [preguntaGeografia, setPreguntaGeografia] = useState([DataPreguntasGeografia[randomNumberGeografia]])
    const [success, setSuccess] = useState(false);
    const optionIndex = [1, 2, 3, 4];
    let messageDeportes = `http://web.whatsapp.com/send?text=Te reto a responder más preguntas correctas sobre Deportes que yo! Mi puntuación fué: ${count}, entrá a quizzer.com`
    let messageHistoria = `http://web.whatsapp.com/send?text=Te reto a responder más preguntas correctas sobre Historia que yo! Mi puntuación fué: ${count}, entrá a quizzer.com`
    let messageGeografia = `http://web.whatsapp.com/send?text=Te reto a responder más preguntas correctas sobre Geografia que yo! Mi puntuación fué: ${count}, entrá a quizzer.com`



    //global controllers
    const desordenarLista = () => {

        let randomIndex = Math.floor(Math.random() * optionIndex.length);
        document.getElementById("optn_1").style.order = optionIndex.splice(randomIndex, 1)
        document.getElementById("optn_2").style.order = optionIndex.splice(randomIndex, 1)
        document.getElementById("optn_3").style.order = optionIndex.splice(randomIndex, 1)
        document.getElementById("correcta").style.order = optionIndex.splice(randomIndex, 1)
    }
    const wrong = (event) => {
        event.target.setAttribute('class', 'bg-danger')
        setTimeout(() => {
            event.target.classList.remove('bg-danger')
        }, 60)
    }

    const right = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false)
        }, 60)
        setCount(count + 1);
        setSwitche(true);
        setTimeout(() => {
            setSwitche(false)
        }, 500)
    }


    const runTimer = () => {
        if (timer > 0) {
            setTimeout(() => { setTimer(timer - 1) }, 1000)
        }


    }

    //deportes controllers

    const getQuestionDeportes = (event) => {
        wrong(event);
        let randomNumber = Math.floor(Math.random() * DataPreguntasDeportes.length);
        setPreguntaDeportes(DataPreguntasDeportes.splice(randomNumber, 1))
        setTimeout(() => {
            desordenarLista();
        }, 60)
    }

    const acertadaDeportes = () => {

        right();
        let randomNumber = Math.floor(Math.random() * DataPreguntasDeportes.length);
        setPreguntaDeportes(DataPreguntasDeportes.splice(randomNumber, 1));
        setTimeout(() => {
            desordenarLista();
        }, 60)
    }
  
 
    // historia controllers 

    const getQuestionHistoria = (event) => {

        wrong(event);
        let randomNumber = Math.floor(Math.random() * DataPreguntasHistoria.length);
        setPreguntaHistoria(DataPreguntasHistoria.splice(randomNumber, 1));
        setTimeout(() => {
            desordenarLista();
        }, 60)
    }

    const acertadaHistoria = () => {
        right();
        let randomNumber = Math.floor(Math.random() * DataPreguntasHistoria.length);
        setPreguntaHistoria(DataPreguntasHistoria.splice(randomNumber, 1));
        setTimeout(() => {
            desordenarLista();
        }, 60)
    }

    // geografia controllers 

    const getQuestionGeografia = (event) => {
        wrong(event);
        let randomNumber = Math.floor(Math.random() * DataPreguntasGeografia.length);
        setPreguntaGeografia(DataPreguntasHistoria.splice(randomNumber, 1));
        setTimeout(() => {
            desordenarLista();
        }, 60)
    }

    const acertadaGeografia = () => {
        right();
        let randomNumber = Math.floor(Math.random() * DataPreguntasGeografia.length);
        setPreguntaGeografia(DataPreguntasGeografia.splice(randomNumber, 1));
        setTimeout(() => {
            desordenarLista();
        }, 60)
    }




    useEffect(() => {
        runTimer();
    }, [timer])


    const value = {
        acertadaDeportes,
        acertadaHistoria,
        acertadaGeografia,
        getQuestionDeportes,
        getQuestionHistoria,
        getQuestionGeografia,
        runTimer,
        switche,
        count,
        success,
        preguntaDeportes,
        preguntaHistoria,
        preguntaGeografia,
        optionIndex,
        messageDeportes,
        messageGeografia,
        messageHistoria,
        timer,
        DataPreguntasHistoria,
        
       
    }
    return (
        <>
            <CategoriasContext.Provider value={value}>
                {children}
            </CategoriasContext.Provider>
        </>
    )
}

export default CategoriasProvider