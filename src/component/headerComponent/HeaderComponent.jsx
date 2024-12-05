import React, { useContext, useEffect, useState } from 'react'
import './headerComponent.css'
import ProfileCircle from '../ProfileCircle/ProfileCircle.jsx'
import { socket } from '../../screens/HomePage/HomePage.jsx';

function HeaderComponent(props) {

  const { userData } = props;

  const [members, setMembers] = useState([]);
  
  socket.on("roomUsers",(e)=>{
    // console.log("aagya bhai room users ",e);

    const temp = e.filter((i) => {
      return i != userData.userId;
    })

    // console.log("______--->>",e)
    setMembers(temp);
  })

  
  // socket.on("roomData", (e) => {
  //   console.log(" ----- Inside Room Data ", e.users);

  //   const temp = e.users.filter((i) => {
  //     return i != userData.userId;
  //   })

  //   console.log("______--->>",e)
  //   setMembers(temp);
  // })

  const userName = userData.userName ?? "XX";



  socket.on("newJoinedUser", (e) => {
    // console.log("NEw user AA gyaaaa !!!!", e);
    // const temp =  members.push(e);
    
    // console.log("new Joineeee added so checking ...  --->",e);
    
    // 

    if (members.includes(e) || e == userData.userId) {
      // console.log("already exist", members);
    }
    else {
    
      // console.log("Not already exist", members);

      const tempArray = [...members];
    
      tempArray.push(e);
  
      setMembers(tempArray);


    }

  })

  return (
    <div className='headerComponent'>

      {/* <div style={{ display: "flex" }}> */}
        {/* {
          members.map((i) => {
            return <ProfileCircle key={i} userName={i[0]} />
          })

        } */}


      {/* </div> */}

      <span className="roomIdTextStyle">Room Id : {userData.roomId}</span>

      <span className="appName">Chat Messaging App</span>
      <ProfileCircle userName={userName[0]} />
    </div>
  )
}

export default HeaderComponent


