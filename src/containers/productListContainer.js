//Importamos React
import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

//Requerimos consulta a base de datos
import  Services  from "../services/listProductService";

// Importamos ProductList
import ProductList from "../components/productList/productList";

export default function ProductListContainer() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("Ingresó a /productListContainer => useEffect");
    const products = Services.getAllProducts();
    products
      .then((data) => {
        setProductList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Row>
      <h1>Lista de Productos</h1>
      <section>
        {productList.length === 0 ? (
          <h1>Cargando</h1>
        ) : (
          <ProductList productList={productList} />
        )}
      </section>
    </Row>
  );
}
