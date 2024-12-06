import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import ChatScreen from '../ChatScreen'
import SideBarSection from '../SideBarSection/SideBarSection'

import { io } from 'socket.io-client';
import LoginModel from '../../component/LoginModel/loginModel';


const URL = "http://192.168.100.132:5000";

export const socket = io(URL);

socket.on("connect", () => {
  // console.log("Connectedd !", socket.id); // x8WIv7-mJelg7on_ALbx
});


socket.on("sendMessage",(e)=>{
  // console.log("rec message ",e);
})
   

export const MyContext = React.createContext({});


function HomePage() {

  const [userData, setUserData] = useState(null);
  // const [roomMembers,setRoomMembers] = useState([]);
  const [showLoginModel, setShowLoginModel] = useState(false);



  useEffect(() => {
    const user = fetchUserDetails();
    if (user.roomId) {

      setUserData(user);
      socket.emit("joinRoom", { roomId: user.roomId, userId: user.userId});

      setShowLoginModel(true);
      // console.log("true");
    }
    else {
      console.log("No user registered");
    }
  }, [])

  return (
    <MyContext.Provider value={{userData , setUserData}}>

    <div className='parentContainer'>
     
      { 
        // showLoginModel ?
        true?
             
              <div className="container">
                  <SideBarSection />
                  <ChatScreen userData= {{userName :"Monty", userId: "Monty.122",roomId: "U90"}} />
              </div>
          

          :

          <LoginModel showModel={setShowLoginModel} setUserData = {setUserData}/>
      }
    </div>
      </MyContext.Provider>
  )
}



function fetchUserDetails() {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  else {
    console.log("returning 0")
    return {};
  }
}

export default HomePage