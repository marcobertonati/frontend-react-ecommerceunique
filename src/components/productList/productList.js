//Importamos React
import React from "react";

import { Container, Row, Col } from "react-bootstrap";

//Importamos componente Product
import Product from "../product/product";

export default function ProductList({ productList }) {
  return (
      <Row>
        {productList.map((product) => {
          return <Col>
          <Product key={product._id} product={product} />
          </Col>;
          
        })}
      </Row>
    
  );
}
