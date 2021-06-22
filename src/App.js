import React from 'react';
import '../src/App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Signup from './components/SignUp/Signup'
import RankingDeportes from './components/Ranking/RankingDeportes'
import Faq from './components/FAQ/Faq'
import Login from './components/Login/Login'
import Categorias from './Categorias/MenuCategorias/Categorias'
import PrivateRoute from './PrivateRoute'
import PreguntasDeportes from './Categorias/DeportesPreguntas/PreguntasDeportes'
import PreguntasHistoria from './Categorias/HistoriaPreguntas/PreguntasHistoria'
import PreguntasGeografia from './Categorias/GeografiaPreguntas/PreguntasGeografia'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider} from './contexts/AuthContext';
import { CategoriasProvider } from './contexts/CategoriasContext'
import { RankingProvider } from './contexts/RankingContext'
import { RankingHistoria } from './components/Ranking/RankingHistoria'
import {RankingGeografia } from './components/Ranking/RankingGeografia'
import HowToPlay from '../src/components/HowToPlay/HowToPlay'

const App = () => {

  return (
   <AuthProvider> 
    <Router>  
    
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/login"  component={Login} />
          <Route exact path="/howtoplay"  component={HowToPlay}/>
          <PrivateRoute exact path="/categorias" component={Categorias}/>
          
          <CategoriasProvider>
          <PrivateRoute exact path="/deportes" component={PreguntasDeportes}/>
          <PrivateRoute exact path="/historia" component={PreguntasHistoria}/>
          <PrivateRoute exact path="/geografia" component={PreguntasGeografia}/>
          </CategoriasProvider>
          
        </Switch>
        <RankingProvider>
          <Route exact path='/rankingDeporte' component={RankingDeportes} />
          <Route exact path='/rankingHistoria' component={RankingHistoria} />
          <Route exact path='/rankingGeografia' component={RankingGeografia} />
         </RankingProvider>
       
       
      </div>
    </Router>
    </AuthProvider>
   
  );
}
 
export default App;
