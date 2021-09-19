//Importamos React
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function Chat({ message }) {

  return (
    <Col xs={12}>
        <p>{message.author.id} || {message.author.date} || Mensaje: {message.text}</p>
    </Col>
  );
}
