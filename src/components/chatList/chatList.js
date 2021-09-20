//Importamos React
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//Importamos componente Product
import Chat from "../chat/chat";

export default function ChatList({ chatList }) {

  console.log('Ingresó a ChatList')
  console.log(chatList)
  return (
      <Row>
        <h3>Historial de chat</h3>
        
        {
        chatList.content.map((message) => {
          return (
            <Chat key={message._id} message={message} />
          )
        })}
      </Row>
    
  );
}
