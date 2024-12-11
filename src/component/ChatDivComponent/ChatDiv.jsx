import React, { useContext, useEffect, useRef, useState } from "react";
import "./ChatDiv.css";
import { BASEURL, MyContext, socket } from "../../screens/HomePage/HomePage";
import ChatTile from "../ChatTileComponent/ChatTile";
import axios from "axios";

function ChatDiv() {
  const { userData, currentChat, setCurrentChat } = useContext(MyContext);

  const [message, setMessage] = useState([]);
  const chatEndRef = useRef(null);

  socket.on("newDirectMessage", (res) => {
    const newArray = [...message, res];

    console.log(newArray);
    setMessage(newArray);
  });

  useEffect(() => {
    socket.emit("registerSocket", { userId: userData?.userId });
    setMessage([]);

    fetchMessageHistory();
  }, [currentChat]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);


  // style={{ justifyContent :  currentChat.id ||message.length > 0  ? "flex-start" : "center"}}

  return (
    <div className="chatDiv"   style={{ justifyContent :  message.length > 0  ? "flex-start" : "center" }}
>
      
      {
        currentChat.id ?  message.length > 0 ?    
        message.map((data, index) => {
        return <ChatTile key={index} data={data} />;
          }) : <span> your friend {currentChat.name} is waiting for your message </span>
         :<span>Select person from left menu and start conversation with them. </span> 
      }
      
    
      

     
      <div ref={chatEndRef} />
    </div>
  );

  function fetchMessageHistory() {
    const data = {
      senderId: userData.userId,
      receiverId: currentChat.id,
      roomId: "",
    };

    axios
      .post(BASEURL + "/getPreviousMessages", data)
      .then((res) => {
        // console.log("---dataa-->#23", res);
        if (res.status === 200) {
          const tempArray = res.data;
          // console.log("---dataa-->#24", res.data.messages);
          setMessage(res.data.messages);
        }
      })
      .catch((err) => {
        console.log("errror -----> ", err);
      });
  }
}

export default ChatDiv;
