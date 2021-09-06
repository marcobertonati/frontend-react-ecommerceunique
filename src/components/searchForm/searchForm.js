//Importamos React
import React, { useState, useEffect } from "react";
import {Form, Button} from 'react-bootstrap'

export default function SearchForm( {searchByTitle, searchByCode, searchByPrice, searchByStock} ) {
  return (
    <div>
      <h1>Buscador de productos:</h1>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label for="title">Buscar por nombre del Producto</Form.Label>
          <Form.Control
            id="title"
            type="text"
            name="title"
            placeholder="Ingrese nombre del producto"
          />
        </Form.Group>

        <Button id="btn-search"  variant="primary" onClick={searchByTitle}>
          Buscar por nombre
        </Button>
      </Form>

        <br/>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label for="title">Buscar por código del producto</Form.Label>
          <Form.Control
            id="code"
            type="text"
            name="code"
            placeholder="Ingrese codigo del producto"
          />
        </Form.Group>

        <Button id="btn-search"  variant="primary" onClick={searchByCode}>
          Buscar por codigo
        </Button>
      </Form>

      <br/>


      <Form>
        <Form.Group className="mb-3">
          <Form.Label for="title">Buscar por rango de precios</Form.Label>
          <Form.Control
            id="price-min"
            type="text"
            name="price-min"
            placeholder="Ingrese precio mínimo"
          />
          <Form.Control
            id="price-max"
            type="text"
            name="price-max"
            placeholder="Ingrese precio maximo"
          />
        </Form.Group>

        <Button id="btn-search"  variant="primary" onClick={searchByPrice}>
          Buscar por rango de precio
        </Button>
      </Form>

      <br/>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label for="title">Buscar por rango de stock</Form.Label>
          <Form.Control
            id="stock-min"
            type="text"
            name="stock-min"
            placeholder="Ingrese stock mínimo"
          />
          <Form.Control
            id="stock-max"
            type="text"
            name="stock-max"
            placeholder="Ingrese stock maximo"
          />
        </Form.Group>

        <Button id="btn-search"  variant="primary" onClick={searchByStock}>
          Buscar por rango de stock
        </Button>
      </Form>
      
    </div>
  );
}
