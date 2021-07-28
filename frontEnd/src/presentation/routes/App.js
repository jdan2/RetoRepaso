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
import Tickets from '../pages/Tickets';
import NewFactura from '../pages/NewFactura';
import Facturas from '../pages/Facturas';




const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newticket" component={NewTicket}/>  
          <Route exact path="/listtickets" component={Tickets} /> 
          <Route exact path="/newfactura" component={NewFactura}/>  
          <Route exact path="/listfacturas" component={Facturas} />       
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
