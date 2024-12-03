import React from 'react'
import "./InputSection.css";

function InputSection() {
  return (
    <div  id='inputsection'>
        <input className='inputTextFeild' type="text" />
        <img style={{height : 35, backgroundColor: 'white',width: 35,borderRadius:35, margin: "10px" }} src='https://t3.ftcdn.net/jpg/02/93/72/48/360_F_293724835_LqDz77Sl5zGWOU5eEcPYMM99qeBiiaiu.jpg'></img> 
    </div>
  )
}

export default InputSection