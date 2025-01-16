

// import e from 'express'
import React, { useState } from 'react'

const Emp = () => {
    const [name,setName]=useState("")
    const [role,setRole]=useState("")
    const [email,setEmail]=useState("")
    const [dept,setDept]=useState("")
    const details={name,role,email,dept}

    
    const handle=(e)=>{
        e.preventDefault()
        console.log(details)
       
    }
    
    
  return (
    <div>
    <form onSubmit={handle}>
     <input type='text'name='name' onChange={(e)=>{setName(e.target.value)}}/>
     <input type='text'name='role' onChange={(e)=>{setRole(e.target.value)}}/>
     <input type='text'name='email' onChange={(e)=>{setEmail(e.target.value)}}/>
     <input type='text'name='dept' onChange={(e)=>{setDept(e.target.value)}}/>
     <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Emp
 