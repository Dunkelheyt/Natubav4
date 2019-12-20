import React, { Component } from "react";
import RedesSociales from "./../social/RedesSociales";
import Form from "./Form";
import Map from "./../map/MapContainer";
class Contacto extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Contactanos!</h1>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            varius urna faucibus nisi mollis, in ultrices nibh aliquam.
            Vestibulum vel dolor non ex auctor vulputate vitae a nisi. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius
            urna faucibus nisi mollis, in ultrices nibh aliquam. Vestibulum vel
            dolor non ex auctor vulputate vitae a nisi. Pellentesque posuere
            nisi at rhoncus cursus. Pellentesque consequat dui ipsum, et
            fermentum magna sodales dapibus.
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 rightBorder">
              <Form />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <RedesSociales />
            </div>
          </div>
          <hr />
          <h2 className="text-center">Mapa</h2>
          <Map />
        </div>
      </div>
    );
  }
}

export default Contacto;
