import React, { useContext, useEffect, useRef, useState } from "react";
import "./ChatDiv.css";
import { BASEURL, MyContext, socket } from "../../screens/HomePage/HomePage";
import ChatTile from "../ChatTileComponent/ChatTile";
import axios from "axios";
import { checkIsRoom } from "../../sevices/checkIsRoom";

function ChatDiv() {
  const { userData, currentChat, setCurrentChat } = useContext(MyContext);

  const [message, setMessage] = useState([]);
  const chatEndRef = useRef(null);

  const [isRoom, setIsRoom] = useState(false);

  useEffect(() => {
    setIsRoom(checkIsRoom(currentChat.id ?? ""));
  }, [currentChat.id]);

  socket.on("newDirectMessage", (res) => {
    const newArray = [...message, res];

    setMessage(newArray);
  });

  socket.on("newMessage", (res) => {});

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

  return (
    <div
      className="chatDiv"
      style={{ justifyContent: message.length > 0 ? "flex-start" : "center" }}
    >
      {currentChat.id ? (
        message.length > 0 ? (
          message.map((data, index) => {
            return <ChatTile key={index} data={data} />;
          })
        ) : isRoom ? (
          <span>
            {" "}
            Everyone in {currentChat.name} group is waiting for your message{" "}
          </span>
        ) : (
          <span>
            {" "}
            your friend {currentChat.name} is waiting for your message{" "}
          </span>
        )
      ) : (
        <span>
          Select person from left menu and start conversation with them.{" "}
        </span>
      )}

      <div ref={chatEndRef} />
    </div>
  );

  function fetchMessageHistory() {
    const data = {
      senderId: userData.userId,
      receiverId: currentChat.id,
      roomId: "",
    };

    // const data = isRoom ? {
    //   senderId: userData.userId,
    //   receiverId: "",
    //   roomId: currentChat.id,
    // }:{
    //   senderId: userData.userId,
    //   receiverId: currentChat.id,
    //   roomId: "",
    // };

    console.log("Fetching messgae for room,", data);

    axios
      .post(BASEURL + "/getPreviousMessages", data)
      .then((res) => {
        if (res.status === 200) {
          const tempArray = res.data;
          setMessage(res.data.messages);
        }
      })
      .catch((err) => {
        console.log("errror -----> ", err);
      });
  }
}

export default ChatDiv;
