import React, { useEffect, useState } from 'react'
import SearchComponent from './SearchComponent'
import ChatList from './ChatList'

const ChatComponent = () => {
    const [list, setList] = useState([]);
    const [filterList, setFilterList] = useState(list);
    const handleChange = (value) =>{
        if(value.length === 0){
            setFilterList(list);
        } else {
            let newList = list.filter(ele=> ele.title.includes(value) || ele.orderId.includes(value));
            setFilterList(newList);
        }
    }
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/codebuds-fk/chat/chats ').then(res=> res.json().then(res=>{setList(res);setFilterList(res);}));
    },[])
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div>
                <SearchComponent handleChange={handleChange}/>
            </div>
            <div>
                <ChatList list={filterList}/>
            </div>
        </div>
    )
}

export default ChatComponent