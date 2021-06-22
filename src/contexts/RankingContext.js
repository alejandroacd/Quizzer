import React, {useState, createContext,useContext} from 'react';



const RankingContext = createContext();
export const useRanking = () => {
    return useContext(RankingContext)
}

export const RankingProvider = ({children}) => {

const [categorie,setCategorie] = useState('#Deportes');


const cambiarCategoria = (prop) =>{
    setCategorie(prop)
}
    const value = {
        categorie,
        cambiarCategoria,
        
        
    }

    return (
      <RankingContext.Provider value={value}>
          {children}
      </RankingContext.Provider>
    )
}


export default RankingProvider