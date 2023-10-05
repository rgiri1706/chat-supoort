import React, { useState } from 'react'
import '../styles/ListContainer.css';
import ChatBox from './ChatBox';

const ChatList = ({list}) => {
    const [currentChat, setCurrentChat] = useState(null);
    const [currentIndex, setCurrentIndex]=useState(null);
    const handleListClick = (item,index) =>{
        setCurrentChat(item);
        setCurrentIndex(index);
    }
    const handleInsert = (chat, data) =>{
        let detail = {...data};
        detail.messageList.push({message: chat, sender: 'USER'});
        setCurrentChat(detail);
    }
    return (
        <div className='chat-container'>
            <div className='list-box'>
                {list.map((ele,index)=>{
                return (
                    <div className='list-container' key={ele.orderId} onClick={()=> handleListClick(ele, index)} style={index === currentIndex ? {backgroundColor: 'rgb(208, 199, 199)'}:{} }>
                        <div className='image-section'><img src={ele.imageURL} width={30} height={30} alt='item'/></div>
                        <div className='details-section'>
                            <div className='title'>{ele.title}</div>
                            <div className='title'>OrderId: {ele.orderId}</div>
                            <div className='message-list'>{ele.messageList[ele.messageList.length-1]?.message}</div>
                        </div>
                        <div className='date-section'></div>
                    </div>
                );
                })}
            </div>
            {currentChat && <div className='chat-widget'>
                <ChatBox chatData={currentChat} handleInsert={handleInsert}/>
            </div>}
        </div>
    );
}

export default ChatList