import React from 'react'
import './ProfileCircle.css'
import "../headerComponent/HeaderComponent.css"
function ProfileCircle({userName}) {
  return (
    <div className='profileCircle'>
        <span className='appName'>{userName}</span>
    </div>
  )
}

export default ProfileCircle