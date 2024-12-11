import React, { useContext, useEffect, useState } from "react";
import "./popUp.css";
import "../LoginModel/LoginModel.css";
import { MyContext, socket } from "../../screens/HomePage/HomePage";
import "../FriendListSection/FriendListSection.css";
import CreateRoomPopUp from "../../popUpContent/CreateRoomPopUp/createRoomPopUp";
import JoinRoomPopUp from "../../popUpContent/JoinRoomPopUp/JoinRoomPopUp";

function PopUp({Component ,setShowPopUp}) {
  const { currentChat, userData } = useContext(MyContext);
  const [isJoinRoom, setIsJoinRoom] = useState();
  const [roomName, setRoomName] = useState("");

  // useEffect(() => {
  //   //  console.log("------>>>>>",currentChat)
  //   const temp = currentChat.id ?? "";
  //   const prefixChatname = temp.split("-");
  //   setIsJoinRoom(prefixChatname[0] !== "Room"); // Update state based on logic
  // }, [currentChat]); // Only re-run if currentChat changes

  return (
    <div
      className="popUpStyle"
      onClick={() => {
        setShowPopUp(false);
      }}
    >
      {Component}
    </div>
  );
}

export default PopUp;
