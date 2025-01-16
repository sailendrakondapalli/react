

import React, { useState }from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Form = () => {

  const [hey,setHey] = useState(" ")
  const [hnew,setHnew]= useState()
const click=(e)=>{
setHey(e.target.value)
}
const notify = () => toast("sucessful");
const clickk =(e)=>{
  e.preventDefault()
    setHnew(hey)
  notify();
}

  return (
    <div>
     <h2>{hnew}</h2>
     <ToastContainer />
      <h2>Form</h2>
      <form onSubmit={clickk}>
      <input type='text' placeholder='enter text' onChange={click} />
      <button type='submit'>submit</button></form>
    </div>
  )
}

export default Form
