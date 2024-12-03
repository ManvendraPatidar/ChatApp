import React from 'react'
import "./ChatDiv.css"

function ChatDiv() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <div className='chatDiv'>

            {
                arr.map((i) => {
                    return <ChatTile key={i} id={i} />
                })
            }


        </div>
    )
}

export default ChatDiv



function ChatTile(props) {
    const { id } = props;
    console.log(id);
    return (
        <div className='chatSpace' style={{ justifyContent: id % 2 === 0 ? "flex-start" : "flex-end" }}>
            <div id={id} className='chatTile' style={{ borderRadius: id % 2 === 0 ? "0px 20px 20px 20px" : "20px 0px 20px 20px" }}> This is message and content This is message and content of the message shown herrejdfghsdh dflihj n shdfu and content of the message shown herretent of the message shown herre </div>
        </div>
    )
}
