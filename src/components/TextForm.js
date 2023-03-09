import React , { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log(text+" text")
            let newText= text.toUpperCase();
            setText(newText)
    }
    const handleLowClick = () => {
       
            let newText= text.toLowerCase();
            setText(newText)
    }
    const handleBlankClick = () => {
        
            let newText= '';
            setText(newText)
    }

    const handleCopyClick = () => {
     var text =document.getElementById('myBox')
     text.select();
     navigator.clipboard.writeText(text.value);
     document.getSelection().removeAllRanges()
 }

    const handleOnChange = (event) => {
         setText(event.target.value)
    }




  return (
    <>
   <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
   <h1> {props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white' ,
    color:props.mode==='light'?'black':'white'
    }} value={text}  onChange={handleOnChange}  id="myBox" rows="8"></textarea>
  </div>
    <button className='btn btn-primary mx-5 my-3' onClick={handleUpClick} >Convert To Uppercase</button>

    <button className='btn btn-primary mx-5 my-3' onClick={handleLowClick} >Convert To Lowercase</button>

    <button className='btn btn-primary mx-5 my-3' onClick={handleBlankClick} >Clear Text</button>

    <button className='btn btn-primary mx-5 my-3' onClick={handleCopyClick} >Copy Text</button>


  </div>
  <div className='container my-2' style={{color:props.mode==='light'?'black':'white'}}>
        <h1> Your Text S    ummary</h1>
        <p>{text.split(" ").filter((element) => {return element.length!==0}).length } words and {text.length} char</p>
  </div>
  </>
  )
}
