import React, { useContext, useEffect, useState } from "react";
import "./headerComponent.css";
import ProfileCircle from "../ProfileCircle/ProfileCircle.jsx";
import { MyContext } from "../../screens/HomePage/HomePage.jsx";
// import { socket } from '../../screens/HomePage/HomePage.jsx';

function HeaderComponent() {
  const [members, setMembers] = useState([]);
  const { setShowPopUp, currentChat } = useContext(MyContext);

  const temp = currentChat.id ?? "";
  console.log("PreFix #100-->", temp);

  const prefixChatname = temp.split("-");

  return (
    <div className="headerComponent">
      {/* <span className="roomIdTextStyle">Room Id : {userData.roomId}</span> */}

      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="menuIconStyle"
          src="https://static.thenounproject.com/png/331097-200.png"
          style={{
            height: "35px",
            width: "35px",
            margin: "0px 10px",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
          onClick={() => {}}
        />

        <button
          className="createGroupButton"
          onClick={() => {
            setShowPopUp(true);
          }}
        >
          {prefixChatname[0] === "Room" ? "Add Friends" : "Create Group"}
        </button>
      </div>
      {/* <span className="appName">SIGNAL</span> */}
      <span className="appName">{currentChat?.name}</span>

      <ProfileCircle />
    </div>
  );
}

export default HeaderComponent;
