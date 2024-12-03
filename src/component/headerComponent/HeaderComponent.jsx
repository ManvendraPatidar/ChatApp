import React from 'react'
import './headerComponent.css'
import ProfileCircle from '../ProfileCircle/ProfileCircle.jsx'

function HeaderComponent() {
  const userName = "M";
  return (
    <div  className='headerComponent'> 
        <ProfileCircle userName={"P"}/>
        <span  className= "appName">Chat Messaging App</span>
        <ProfileCircle userName={userName}/>
    </div>
  )
}

export default HeaderComponent


