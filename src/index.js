import React, {Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'

const Home = lazy(()=>import('./components/login'));
const Buscador = lazy (()=>import('./pages/principal'))
const Formulario = lazy (()=>import('./components/formulario'))


ReactDOM.render(
  <React.StrictMode>
     <Router>
            <Suspense  fallback={<p>Cargando</p>}>
                <Switch>
                    <Route path='/home/:home?' render={props => <Home {...props}/>}/> 
                    <Route path='/formulario/:formulario?' render={props => <Formulario {...props}/>}/>                   
                    <Route path='/buscar/:buscar?' render={props => <Buscador {...props}/>}/>  
                </Switch>Home
            </Suspense>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
