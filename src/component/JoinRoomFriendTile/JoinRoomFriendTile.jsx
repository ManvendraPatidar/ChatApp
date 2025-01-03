import React, { useState } from 'react'
import "./JoinRoomFriendTile.css"
const JoinRoomFriendTile = ({data,selectedMembers}) => {
    // const isSelected = selectedMembers.has(i.userId);
    // const isSelected = false;
    const [isSelected,setIsSelected] = useState(false);
    console.log("this is i , --- > ",data);
    
    return (
        <div className="friendTile"  style={{backgroundColor : isSelected ? "rgb(60 138 60)":"rgb(75, 91, 104)"}} onClick={() => {
         
           if(isSelected)
           {
              selectedMembers.delete(data.userId); 
           }else{
            selectedMembers.add(data.userId);
           }
           
           setIsSelected(!isSelected);

        }}>
          {/* {i.split(".")[0]}rgb(255 31 0) */}
          {/* {i.name} */}
          <span style={{ color: "white", fontSize: "20px" }}>
            {data.name}
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "black",
              letterSpacing: "1px",
              fontWeight: "normal",
            }}
          >
          {data.email}
          </span>
        </div>
      );
}

export default JoinRoomFriendTile