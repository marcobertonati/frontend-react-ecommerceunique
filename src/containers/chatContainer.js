import React, { useState, useEffect } from "react";
import { allMessagesChat } from "../services/chatService";
import ChatList from "../components/chatList/chatList";
const { normalize, denormalize, schema } = require("normalizr");
export default function ChatContainer() {

  const [chatList, setChatList] = useState([]);
  const [compressionData, setCompressionData] = useState();


  useEffect(() => {
    const data = allMessagesChat();
    data
      .then((chats) => {

        const userSchema = new schema.Entity("authors");
        const entrySchema = new schema.Entity(
          "entries",
          {
            author: userSchema,
          },
          { idAttribute: (value) => value._id }
        ); /*Este es el ID del mensaje de chat */

        const chatSchema = new schema.Entity("chat", {
          content: [entrySchema],
        });

        const desnormalizedData = denormalize(chats.result, chatSchema, chats.entities);

        console.log(desnormalizedData);

        const normalizedDataLength = JSON.stringify(chats).length;
        const denormalizedDataLength = JSON.stringify(desnormalizedData).length;
        const compression = 100 - (normalizedDataLength * 100 / denormalizedDataLength);

        console.log(normalizedDataLength);
        console.log(denormalizedDataLength);
        console.log(compression);

        setCompressionData(compression);
        setChatList(desnormalizedData);
        
      })
      .catch((err) => console.log(err));
  }, []);


  return (
      <>
      {
          !compressionData ? null : <h3>Compresión del {compressionData}% de la data</h3>
      }

      {
        chatList.length === 0 ? <h2>Cargando chats</h2> : <ChatList chatList={chatList} />

      }
      </>
    )
}
