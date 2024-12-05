import React, { useContext, useState } from 'react'
import "./InputSection.css";
import { MyContext, socket } from '../../screens/HomePage/HomePage';

function InputSection() {

  const {userData} = useContext(MyContext);
  const [message,setMessage] = useState("");

  return (
    <div  id='inputsection'>
        <input className='inputTextFeild'placeholder='Send a message'  type="text"  value={message} onChange={(e)=>{ setMessage(e.target.value);}}/>
        <img  onClick={sendMessage}   style={{height : 35, backgroundColor: 'white',width: 35,borderRadius:35, margin: "10px" }} src='https://t3.ftcdn.net/jpg/02/93/72/48/360_F_293724835_LqDz77Sl5zGWOU5eEcPYMM99qeBiiaiu.jpg'></img> 
    </div>
  )


  function sendMessage()
  {  

      // console.log("this is room id ",userData.roomId);  
      // console.log("this is message ",message);
      if(message.trim() != "")
      {
        socket.emit("sendMessage",{roomId: userData.roomId,userId: userData.userId,message: message})
        // setMessage("");

      }
      setMessage("");
  }
}

export default InputSection