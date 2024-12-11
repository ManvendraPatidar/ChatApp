import React, { useContext, useEffect, useState } from 'react'
import './headerComponent.css'
import ProfileCircle from '../ProfileCircle/ProfileCircle.jsx'
import { MyContext } from '../../screens/HomePage/HomePage.jsx';
// import { socket } from '../../screens/HomePage/HomePage.jsx';

function HeaderComponent(props) {

  const { userData } = props;

  const [members, setMembers] = useState([]);
  const {setShowPopUp} = useContext(MyContext);


  // socket.on("roomUsers", (e) => {

  //   const temp = e.filter((i) => {
  //     return i != userData.userId;
  //   })

  //   setMembers(temp);
  // })

  const userName = userData.userName ?? "XX";

  // socket.on("newJoinedUser", (e) => {
    
  //   if (members.includes(e) || e == userData.userId) {

  //   }
  //   else {


  //     const tempArray = [...members];

  //     tempArray.push(e);

  //     setMembers(tempArray);


  //   }

  // })

  return (
    <div className='headerComponent'>
      {/* <span className="roomIdTextStyle">Room Id : {userData.roomId}</span> */}
      
      <div style={{display: "flex" , alignItems: "center"}}> 
      <img className = "menuIconStyle" src="https://static.thenounproject.com/png/331097-200.png" style={{height: "35px", width: "35px" , margin: "0px 10px" , borderRadius: "5px" , backgroundColor: 'white',}}/>  
      <button className='createGroupButton' onClick={()=>{
            setShowPopUp(true);
      }}>Create Group</button>
      </div>
      <span className="appName">SIGNAL</span>
        
        <ProfileCircle userName={userName[0]}  
        
        />
    </div>
  )
}

export default HeaderComponent


