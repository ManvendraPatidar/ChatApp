import React, { useContext, useEffect, useState } from 'react'
import './headerComponent.css'
import ProfileCircle from '../ProfileCircle/ProfileCircle.jsx'
import { socket } from '../../screens/HomePage/HomePage.jsx';

function HeaderComponent(props) {

  const { userData } = props;

  const [members, setMembers] = useState([]);

  socket.on("roomUsers", (e) => {

    const temp = e.filter((i) => {
      return i != userData.userId;
    })

    setMembers(temp);
  })

  const userName = userData.userName ?? "XX";

  socket.on("newJoinedUser", (e) => {
    
    if (members.includes(e) || e == userData.userId) {

    }
    else {


      const tempArray = [...members];

      tempArray.push(e);

      setMembers(tempArray);


    }

  })

  return (
    <div className='headerComponent'>
      <span className="roomIdTextStyle">Room Id : {userData.roomId}</span>

      <span className="appName">SIGNAL</span>
      <ProfileCircle userName={userName[0]}  />
    </div>
  )
}

export default HeaderComponent


