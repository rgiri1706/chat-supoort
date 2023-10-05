import React, {useState} from 'react'
import '../styles/ChatStyle.css';

const ChatBox = ({chatData, handleInsert}) => {
    const [chat, setChat] = useState('')
    const handleInsertChat = () =>{
        handleInsert(chat, chatData);
        setChat('');
    }
    return (
        <div className='chat-window'>
            <div className='chat-header'>
                <div><img src={chatData.imageURL} width={30} height={30} alt='item'/></div>
                <div className='title'>{chatData.title}</div>
            </div>
            <div>
                {chatData.messageList.map(chat=>{
                    if(chat.sender === 'BOT'){
                            return (
                            <div>
                            <div className='bot-chat'>{chat.message}</div>
                            </div>
                            );
                    } else {
                        return (
                            <div style={{height: '14vh'}}>
                                <div className='user-chat'>{chat.message}</div>
                            </div>
                        );
                    }
                })}
                <div className='input-styling'>
                    <div style={{flex: 11}}>
                        <input type='text' value={chat} onChange={(e)=> setChat(e.target.value)} style={{width: '100%'}}/>
                    </div>
                    <div style={{flex: 1, marginLeft: 10}}>
                        <button onClick={()=>handleInsertChat()}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBox