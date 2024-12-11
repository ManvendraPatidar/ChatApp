import React, { useContext, useState } from 'react'
import "./popUp.css"
import "../LoginModel/LoginModel.css"
import { MyContext } from '../../screens/HomePage/HomePage';

function PopUp() {
   const [roomId,setRoomId] = useState(""); 
    
   const {setShowPopUp} = useContext(MyContext);

    return (
        <div className='popUpStyle' onClick={()=>{setShowPopUp(false)}}>
            <div className='containerBox' onClick={(e)=>{e.stopPropagation()}}>

                   <span>Enter the room number</span>
   
                   <input placeholder="Enter the room ID"  className="inputClass" value={roomId}  onChange={(n) => {setRoomId(n.target.value) }}></input>
                   <button className="button" style={{ margin: "10px 0px 20px 0px", }} onClick={()=>{
                    setShowPopUp(false)
                    
                    }}>Submit</button>



            </div>
        </div>
    )
}

export default PopUp