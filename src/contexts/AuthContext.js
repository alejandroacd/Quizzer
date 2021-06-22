 import React, { useContext, useState, useEffect} from 'react';
import { auth } from '../firebase'
import Axios from 'axios';

 
const AuthContext = React.createContext();

export const useAuth = () => {
     return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [db,setDb] = useState([])
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)
 

    const signup  = async (email,password,username) => {
        let user;
       return await auth.createUserWithEmailAndPassword(email,password)
         .then( () =>{
             user = auth.currentUser;
         })
         .then( () => {
             user.updateProfile({
                displayName: username,
             })
         })
    
    }
    const login = (email,password) => {
         return auth.signInWithEmailAndPassword(email,password)
         
    }

    const logout = () => {
        return auth.signOut();
    }


    
    useEffect(() => {
        let unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
         })
         Axios.get('http://localhost:3001/db')
         .then((resp)=>{
             setDb(resp.data)
         })


         return unsubscribe;
     }, [])
   

    const value = {
        currentUser,
        signup,
        login,
        logout,
        db
        
       
    }
return (
    <div>
       <AuthContext.Provider  value={value}>
           
           {!loading && children}
       </AuthContext.Provider>
    </div>
)
} 