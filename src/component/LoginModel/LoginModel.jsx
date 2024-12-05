import { useContext, useState } from "react"
import "./LoginModel.css"
import { MyContext, socket } from "../../screens/HomePage/HomePage";

function LoginModel({ showModel }) {

  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");

  const { setUserData } = useContext(MyContext);

  return (
    <div className="loginModel">
      <div className="LoginCard">
        <span className="name" >Chat Messaging App</span>
        <input placeholder="Enter your name " className="inputClass" value={name} onChange={(n) => { onNameChange(n, "name") }}></input>
        <input placeholder="Enter Room ID " className="inputClass" value={roomId} onChange={(n) => { onNameChange(n, "room") }}></input>

        <button className="button" onClick={onSubmit} >Submit</button>
      </div>
    </div>
  )

  function onNameChange(n, id) {
    if (id === "name") {
      // console.log(n.target.value);
      setName(n.target.value)
    }
    else if (id === "room") {
      // console.log(n.target.value);
      setRoomId(n.target.value);
    }
  }


  function onSubmit() {

    // const obj = {roomId: roomId , userName:name , userId: "userId"};

    //    localStorage.setItem("user",JSON.stringify(obj)); 

    //      showModel(true);
    //      setUserData(obj);
    // var userId ="";

    socket.emit("joinRoom", { roomId: roomId, userId: name });

    // console.log("Hello room id ")
    socket.on("currentUserID", (e) => {
      const user = localStorage.getItem("user");

      if (user === null) {
        const userId = e;
        const obj = { roomId: roomId, userName: name, userId: userId };

        localStorage.setItem("user", JSON.stringify(obj));
        setUserData(obj);
        // socket.emit("roomMessages", roomId);
      }
      showModel(true);

    })


  }
}


export default LoginModel