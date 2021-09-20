//Importamos React
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function Login({ logIn }) {

  return (
   <form>
       <input id="user-login" type="text" placeholder="Ingrese Usuario"></input>
       <button onClick={logIn}>Iniciar sesión</button>
   </form>
  );
}
