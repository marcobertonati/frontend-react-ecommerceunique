//Importamos React
import React from "react";
import { Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Lista de productos</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/agregar-producto" eventKey="link-1">Agregar Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/buscador" eventKey="link-2">Buscar Productos</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
