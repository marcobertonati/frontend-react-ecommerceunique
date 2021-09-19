import React , {useState, useEffect} from 'react';
import {allMessagesChat} from '../services/chatService'
import ChatList from '../components/chatList/chatList';

export default function ChatContainer () {

    const [chatList, setChatList] = useState([]);


    useEffect(()=> {

        const data = allMessagesChat();
        data
            .then(chats=>{
                console.log(chats.historialMessages)
                setChatList(chats.historialMessages)
            })
            .catch(err=>console.log(err))
    },[])

    return(

        <ChatList chatList={chatList} />

    )
}