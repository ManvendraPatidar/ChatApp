import React, { useState } from 'react'
import './ProfileCircle.css'
import "../headerComponent/HeaderComponent.css"
function ProfileCircle({userName}) {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  return (
  <div style={{flexDirection: "row" , boxSizing: "border-box", display: 'flex' , alignItems:"center"  , border: "1px solid white" , borderRadius: "50px"}}   onMouseEnter={() => setIsDropdownVisible(true)}
  onMouseLeave={() => setIsDropdownVisible(false)}>
   <div className='profileCircle'  
      
      >
        <span className='appName'>{userName}</span>
    </div>
  
  {/* {
  isDropdownVisible ? <button onClick={()=>{console.log("Logout USer")}} className='logoutModel'>Logout my Account</button> :<div/>
   } */}
   
   {
    isDropdownVisible? <div className='logoutModel'> 
     <span  style={{color: "black" , fontSize: "20px" , fontWeight: 700}}>Manvendra Patidar</span>
    <div style={{width: "100%" ,margin: "20px 0px", height: "1px",backgroundColor: "#BABABA"}}></div>
      
      <div style={{fontSize: "20px" }} onClick={()=>{
        console.log("Remove User from ")
      }}>Logout</div>
    </div>: <div/>
   }

   </div>
  )
}

export default ProfileCircle