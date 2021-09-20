//Importamos React
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function Logout({ logOut }) {

  return (
       <button onClick={logOut}>Cerrar sessión</button>
  );
}
