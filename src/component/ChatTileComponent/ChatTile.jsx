import React, { useContext, useEffect, useState } from 'react'
import "./ChatTile.css";
import { MyContext, socket } from '../../screens/HomePage/HomePage';


function ChatTile(props) {
    const {userData} = useContext(MyContext); 


    const { id ,data } = props;
    // console.log("------data---->",data.userId);
    // console.log("------Userdata---->",userData.userId);
    

    const iscurrentUSer = data.userId === userData.userId;
    // console.log("------USer Status ---->",iscurrentUSer);
    // console.log(id);


   console.log("++++++++",data.userId.split("."));

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