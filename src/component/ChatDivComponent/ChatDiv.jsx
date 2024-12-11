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
    console.log("------>>>>#555555 MESSAGE AAYA HA ADD KRTA HU", res);
    // const temp = message.append(res);

    const newArray = [...message, res];

    console.log(newArray);
    setMessage(newArray);
  });

  useEffect(() => {
    socket.emit("registerSocket", { userId: userData?.userId });
    //  console.log("Chat Changing to----->",userData.name,currentChat.name);
    setMessage([]);

    fetchMessageHistory();
  }, [currentChat]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  return (
    <div className="chatDiv">
      {message.map((data, index) => {
        // console.log("----->", index);
        return <ChatTile key={index} data={data} />;
      })}
      <div ref={chatEndRef} />
    </div>
  );

  function fetchMessageHistory() {
    console.log("-----ppppp", currentChat.id);
    console.log("-----ppppp", userData.userId);

    const data = {
      senderId: userData.userId,
      receiverId: currentChat.id,
    };

    axios
      .post(BASEURL + "/getPreviousMessages", data)
      .then((res) => {
        console.log("---dataa-->#23", res);
        if (res.status === 200) {
          const tempArray = res.data;
          console.log("---dataa-->#24", res.data.messages);
          setMessage(res.data.messages);
          // setGroupList(tempArray);
          // setFriendList(tempArray);
        }
      })
      .catch((err) => {
        console.log("errror -----> ", err);
      });
  }
}

export default ChatDiv;
