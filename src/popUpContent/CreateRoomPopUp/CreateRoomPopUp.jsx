import React, { useContext, useState } from 'react'
import { MyContext, socket } from '../../screens/HomePage/HomePage';


const CreateRoomPopUp = () => {

  const {setShowCreateRoomPopUp, userData } = useContext(MyContext);
  const [roomName, setRoomName] = useState("");

  return (
    <div>
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
              setShowCreateRoomPopUp(false);
            }}
          >
            Submit
          </button>
        </div>
    </div>
  )
}

export default CreateRoomPopUp