import React, { useContext, useEffect, useState } from "react";
import "./popUp.css";
import "../LoginModel/LoginModel.css";
import { MyContext, socket } from "../../screens/HomePage/HomePage";
import "../FriendListSection/FriendListSection.css";

function PopUp() {
  const { currentChat, setShowPopUp, userData } = useContext(MyContext);
  const [isJoinRoom, setIsJoinRoom] = useState();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    //  console.log("------>>>>>",currentChat)
    const temp = currentChat.id ?? "";
    const prefixChatname = temp.split("-");
    setIsJoinRoom(prefixChatname[0] !== "Room"); // Update state based on logic
  }, [currentChat]); // Only re-run if currentChat changes

  return (
    <div
      className="popUpStyle"
      onClick={() => {
        setShowPopUp(false);
      }}
    >
      {isJoinRoom ? (
        <div
          className="containerBox"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span>Enter the room number</span>

          <input
            placeholder="Enter the room ID"
            className="inputClass"
            value={roomName}
            onChange={(n) => {
              setRoomName(n.target.value);
            }}
          ></input>
          <button
            className="button"
            style={{ margin: "10px 0px 20px 0px" }}
            onClick={() => {
              // console.log("$$",userData)
              socket.emit("createRoom", {
                roomName: roomName,
                userId: userData.userId,
              });
              setShowPopUp(false);
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div
          className="containerBox"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span>Group Name </span>

          <div className="inviteFriendListStyle">
            {[1, 2, 3, 4, 5, 2, 3, 4, 5].map((i, index) => {
              // console.log("thi is last id ,",i);
              return (
                <div key={index} className="friendTile" onClick={() => {}}>
                  {/* {i.split(".")[0]} */}
                  {/* {i.name} */}
                  <span style={{ color: "#ff9800", fontSize: "20px" }}>
                    Manvendra{" "}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "black",
                      letterSpacing: "1px",
                      fontWeight: "normal",
                    }}
                  >
                    manvendra@gmail.com
                  </span>
                </div>
              );
            })}
          </div>

          <button
            className="button"
            style={{ margin: "10px 0px 20px 0px" }}
            onClick={() => {
              socket.emit("createRoom", {
                roomName: "montyeee",
                userId: "monty-0gPvDbh",
              });

              setShowPopUp(false);
            }}
          >
            Add Friends
          </button>
        </div>
      )}
    </div>
  );
}

export default PopUp;
