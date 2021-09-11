//Importamos React
import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Product({ product }) {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Button variant="primary">Detalles de Producto</Button>
      </Card.Body>
    </Card>
  );
}
