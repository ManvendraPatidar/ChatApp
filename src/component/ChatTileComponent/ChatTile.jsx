import React, { useContext, useEffect, useState } from 'react'
import "./ChatTile.css";
import { MyContext} from '../../screens/HomePage/HomePage';


function ChatTile(props) {
    const {userData} = useContext(MyContext); 
    const { id ,data } = props;

    const iscurrentUSer = data.userId === userData.userId;
  
    
    return (
        <div className='chatSpace' style={{ justifyContent: !iscurrentUSer ? "flex-start" : "flex-end" }}>
            <div id={id} className='chatTile' style={{ borderRadius: !iscurrentUSer? "0px 20px 20px 20px" : "20px 0px 20px 20px" }}> 
         {
            !iscurrentUSer ?  <span style={{marginBottom: "20px",color: "aqua" }}>{data.userId.split(".")[0]}</span>: <div/>
         } 
            <span>{data.message}
            </span>
            </div>
        </div>
    )
}


export default ChatTile;