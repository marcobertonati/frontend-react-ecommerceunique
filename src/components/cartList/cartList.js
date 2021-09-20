//Importamos React
import React from "react";

import { Container, Row, Col } from "react-bootstrap";

//Importamos componente Product
import Cart from "../cart/cart";

export default function CartList({ cartList }) {
  
  return (
      <Row>
        {cartList.map((cart) => {
          return <Col>
          <Cart key={cart._id} cart={cart} />
          </Col>;
          
        })}
      </Row>
    
  );
}
