import React, { useEffect, useState } from 'react'
import "./FriendListSection.css"
function FriendListSection({ tittle, list }) {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(list);
    console.log("*****", list);
  },)


  return (
    <div>
      <span className='headingText'>{tittle}</span>
      <div className='friendListStyle'>
        {
          members.map((i) => {
            return <div key={"uni" + i} className='friendCardStyle' style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center" }}>

              {/* {i.split(".")[0]} */}
              {/* {i.name} */}
              <span style={{ color: "#ff9800", fontSize: "20px" }}>{i.name}</span>

              {

                tittle != "Groups" ?
                  <span style={{ fontSize: "14px", color: "black", letterSpacing: "1px", fontWeight: "normal" }}>{i.email}</span>

                  : <div />
              }

            </div>
          })
        }

      </div>
      {/* <div style={{width: "100%" ,margin: "20px 0px", height: "1px",backgroundColor: "#BABABA"}}></div> */}
    </div>
  )
}

export default FriendListSection