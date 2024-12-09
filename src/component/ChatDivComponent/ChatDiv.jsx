import React, { useContext, useEffect, useRef, useState } from 'react'
import "./ChatDiv.css"
import { MyContext} from '../../screens/HomePage/HomePage';
import ChatTile from '../ChatTileComponent/ChatTile';

function ChatDiv() {
    
    

    const { userData } = useContext(MyContext);
    const [message, setMessage] = useState([]);
    const chatEndRef = useRef(null);


        // socket.on("roomMessages", (e) => {
        //     setMessage(e);
        // })


    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [message]);


    // socket.on("newMessage", (e) => {
    //     // console.log("new Message ", e);

    //     // message.push(e);
    //     const tempArray = [...message];
    //     tempArray.push(e);
    //     setMessage(tempArray);


    // })


    return (
        <div className='chatDiv'>

            {
                message.map((data, index) => {
                    // console.log("----->", index);
                    return <ChatTile key={index} data={data} />
                })

            }
            <div ref={chatEndRef} />

        </div>
    )
}

export default ChatDiv

