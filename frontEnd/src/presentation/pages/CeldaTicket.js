import React, { Component } from "react";
import NewTicket from "./NewTicket";
import Search from "./Search";
import SearchFactura from "./SearchFactura";

//import { Link } from "react-router-dom";

export default class CeldaTicket extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="home">
            <section>
            <NewTicket/>
              
             
            </section>
          </div>
        </div>
        <div className="col-6">
          <Search/>
        </div>
      </div>
    );
  }
}