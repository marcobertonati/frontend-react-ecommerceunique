//Importamos React
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function InputChat({ preventDefault, postMessageChat }) {
  return (
    <Form
      onSubmit={preventDefault}
      id="form-addproduct"
      action="http://localhost:8080//api/message/create"
      method="POST"
    >
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control id="email" type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre</Form.Label>
            <Form.Control id="first-name" type="text" placeholder="Nombre" />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control id="last-name" type="text" placeholder="Apellido" />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Edad</Form.Label>
            <Form.Control id="age" type="text" placeholder="Edad" />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Alias</Form.Label>
            <Form.Control id="alias" type="text" placeholder="Alias" />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              id="avatar"
              type="text"
              placeholder="Link imagen de Avatar"
            />
          </Form.Group>
        </Col>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mensaje de chat</Form.Label>
              <Form.Control
                id="message-chat"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
          </Col>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

          <Button
            id="send-chat"
            onClick={postMessageChat}
            variant="primary"
            type="submit"
          >
            Enviar mensaje
          </Button>
        </Row>
      </Row>
    </Form>
  );
}
