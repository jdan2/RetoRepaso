//React
import React from 'react'
//Componentes/paginas
import NewTicket from '../pages/NewTicket';
import Home from  '../pages/Home';


//Redux
import {Provider} from "react-redux";
import store from "../../domain/store";

//Rutas
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"




const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newticket" component={NewTicket}/>          
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;