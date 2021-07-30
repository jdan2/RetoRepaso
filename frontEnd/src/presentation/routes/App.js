//React
import React, {Component} from 'react'
//Componentes/paginas
import NewTicket from '../pages/NewTicket';
import Home from  '../pages/Home';



//Redux
import {Provider} from "react-redux";
import store from "../../domain/store";

//Rutas
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import Tickets from '../pages/Tickets';
import NewFactura from '../pages/NewFactura';
import Facturas from '../pages/Facturas';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from '../pages/autenticacion/signUp';
import { auth } from '../../infrastructure/services/firebase/firebase';
import VerTicket from '../pages/VerTicket';
import Ticketes from '../pages/Ticketes';
import EditarTicket from '../pages/EditarTicket';





function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated == true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/listtickets" />
        )
      }
    />
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    });
  }
  render() {
    return this.state.loading === true ? (
      <h2>Loading...</h2>
    ) : (
      <Router>
        <Provider store={store}>
          <Header />
          <div className="container mt-5">
            <Switch>
              <PublicRoute
                exact
                path="/"
                authenticated={this.state.authenticated}
                component={Home}
              />
              <PrivateRoute
                exact
                path="/newticket"
                authenticated={this.state.authenticated}
                component={NewTicket}
              />
              <PrivateRoute
                exact
                path="/listtickets"
                authenticated={this.state.authenticated}
                component={Tickets}
              />
              <PrivateRoute
                exact
                path="/newfactura/factura/:id"
                authenticated={this.state.authenticated}
                component={NewFactura}
              />
              <PrivateRoute
                exact
                path="/lisfacturas/ver"
                authenticated={this.state.authenticated}
                component={Facturas}
              />
              <PublicRoute
                exact
                authenticated={this.state.authenticated}
                path="/signup"
                component={SignUp}
              />
              <PrivateRoute
                path="/listtickets/editar/:id"
                authenticated={this.state.authenticated}
                component={EditarTicket}
             />
              <PrivateRoute
                path="/listtickets/ver/:id"
                authenticated={this.state.authenticated}
                component={VerTicket}
              />
            </Switch>
          </div>
          <Footer />
          
        </Provider>
      </Router>
    );
  }
}

export default App;