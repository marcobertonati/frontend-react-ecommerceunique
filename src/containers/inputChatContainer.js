import React, { useState, useEffect } from "react";
import { postMessageChat } from "../services/chatService";
import InputChat from "../components/inputChat/inputChat";

export default function InputChatContainer() {
  function preventDefault(e) {
    e.preventDefault();
  }

  function sendChatMsg() {
    console.log("Entro a addProductOnForm");

    const email = document.getElementById("id").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const age = document.getElementById("age").value;
    const timestamp = new Date().toLocaleDateString();
    const alias = document.getElementById("alias").value;
    const avatar = document.getElementById("avatar").value;
    const msgChat = document.getElementById("message-chat").value;

    const chat = {
      author: {
        id: email,
        firstName: firstName,
        lastName: lastName,
        age: age,
        alias: alias,
        avatar: avatar,
        date: timestamp,
      },
      text: msgChat,
    };

    postMessageChat(chat);
  }

  return (
    <InputChat preventDefault={preventDefault} postMessageChat={sendChatMsg} />
  );
}
