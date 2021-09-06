//Importamos React
import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FromAddProducts( ) {
  return (
    <div>
      <h1>Agregar Producto</h1>

      <Form id="form-addproduct" action="http://localhost:8080/api/product/create" method="POST">
        <Form.Group className="mb-3">
          <Form.Label for="title">Nombre del Producto</Form.Label>
          <Form.Control id="title" type="text" name="title" placeholder="Ingrese nombre del producto" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label for="description">Descripción Producto</Form.Label>
          <Form.Control id="description" type="text" name="description" placeholder="Ingrese descripción del producto" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label for="price">Precio del producto</Form.Label>
          <Form.Control id="price" type="text" name="price" placeholder="Ingrese precio del producto" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label for="thumbnail">Imagen del Producto</Form.Label>
          <Form.Control id="thumbnail" type="text" name="thumbnail" placeholder="Ingrese URL de imagen del producto" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label for="timestamp">Timestamp</Form.Label>
          <Form.Control id="timestamp" type="text" name="timestamp" placeholder="Ingrese horario en que agregó producto"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label for="code">Codigo SKUD</Form.Label>
          <Form.Control id="code" type="text" name="code" placeholder="Ingrese Código SKUD del producto" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label for="stock">Stock</Form.Label>
          <Form.Control id="stock" type="text" name="stock" placeholder="Ingrese stock de producto" />
        </Form.Group>

        <Button id="btn-submit" type="submit" variant="primary" >
          Agregar producto
        </Button>
        
      </Form>
    </div>
  );
}
