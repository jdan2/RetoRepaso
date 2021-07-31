import React, { Component } from "react";
import Search from "./Search";
import SearchFactura from "./SearchFactura";

//import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="home">
            <section>
            <SearchFactura/>
              
             
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