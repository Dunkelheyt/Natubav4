import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";

class DisplayProducto extends React.Component {
  render() {
    const { info } = this.props; // ES6 destructuring

    return (
      <div>
        <h1 className="text-center">{info.productoNombre}</h1>
        <div className="container text-center">
          <Carousel
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            dynamicHeight
          >
            {info.imgC.map((data, index) => (
              <div>
                <img src={data} alt="carrousel" />
              </div>
            ))}
          </Carousel>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 rightBorder">
              <h3>Información del producto:</h3>
              <p>{info.desc}</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h3>Sabor:</h3>
              <p>{info.desc2}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 rightBorder">
              <h3>Presentaciones del producto:</h3>
              {info.presentacionesP.map((data, index) => (
                <p className="text-center">{data}</p>
              ))}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h3>Información miscelania:</h3>
              <p>
                Producto al estilo de <strong>{info.tipoProducto}</strong> con
                el nombre de <strong>{info.productoNombre}</strong> que cuenta
                con una mezcla de sabores <strong>{info.tipoProducto2}</strong>.
              </p>
            </div>
          </div>
          <h2 className="text-center">Información nutrimental:</h2>
          {info.nutriF.info1}
          <Table striped bordered hover responsive="true">
            <thead>
              <tr>
                <th>Información nutrimental </th>
                <th>Porción: 30g. Porción por envase: {info.nutriF.porcion}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contenido energético KJ (Kcal)</td>
                <td>{info.nutriF.contenidoEner}.</td>
              </tr>
              <tr>
                <td>Proteínas</td>
                <td>{info.nutriF.proteinas}.</td>
              </tr>
              <tr>
                <td>Grasas(lípidos)</td>
                <td>{info.nutriF.grasas}.</td>
              </tr>
              <tr>
                <td>Carbohidratos (hidratos de carbono)</td>
                <td>{info.nutriF.carbo}.</td>
              </tr>
              <tr>
                <td>Fibra dietética</td>
                <td>{info.nutriF.fibra}.</td>
              </tr>
              <tr>
                <td>Sodio</td>
                <td>{info.nutriF.sodio}.</td>
              </tr>
            </tbody>
          </Table>
          <h1 className="text-center">Tips para preparar:</h1>
          <button type="button" class="btn btn-dark">
            <NavLink to={"/ordenar"}>Ordenar</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default DisplayProducto;
