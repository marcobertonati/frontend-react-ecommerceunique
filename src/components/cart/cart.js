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
            {cart.product.map((info)=> {
            return(
                <>
                <h5>Nombre: {info.title}</h5>
                <li>Precio: {info.price}</li>
                <li>Thumbnail: {info.thumbnail}</li>
                <li>Timestamp: {info.timestamp}</li>
                <li>Descripción: {info.description}</li>
                <li>Código: {info.code}</li>
                <li>Stock: {info.stock}</li>
                <li>ID: {info._id}</li>
                </>
            )
            })}
        </ul>
        </Card.Text>
        {/* <Button variant="primary">Detalles de Producto</Button> */}
      </Card.Body>
    </Card>
  );
}
