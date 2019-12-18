import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Productos extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Productos Natuba</h1>
        <div>
          <NavLink to={"/productos/chips"}>
            <img
              className="quarterImage heartbeat"
              src="https://i.imgur.com/Bem0sEb.png"
              alt="x"
            />
            <h1>Chips deshidratados</h1>
          </NavLink>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div>
          <NavLink to={"/productos/mix"}>
            <img
              className="quarterImage heartbeat"
              src="https://i.imgur.com/meT8DLM.png"
              alt="x"
            />
            <h1>Mix de frutas</h1>
          </NavLink>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div>
          <NavLink to={"/productos/bowls"}>
            {" "}
            <img
              className="quarterImage heartbeat"
              src="https://i.imgur.com/ERHDjAN.png"
              alt="x"
            />
            <h1>Bowl</h1>
          </NavLink>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    );
  }
}

export default Productos;
