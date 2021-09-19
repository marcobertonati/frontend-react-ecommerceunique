//Importamos React
import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Cart({ cart }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Id del carrito: {cart._id}</Card.Title>
        <Card.Text>
          Productos del carrito:
          <ul>
            {cart.productsOnCart.map((element) => {
              console.log(element);
              return <li>{element.product.title}</li>;
            })}
          </ul>
        </Card.Text>
        {/* <Button variant="primary">Detalles de Producto</Button> */}
      </Card.Body>
    </Card>
  );
}
