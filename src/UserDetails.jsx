

import React, { useState,useEffect } from 'react'
const url="https://jsonplaceholder.typicode.com/posts"


const UserDetails = () => {

    const [user,setUser]=useState([])

    const userHandle=async()=>{
        const response=await fetch(url)
        const neww=await response.json()
        setUser(neww)
    }
    useEffect(()=>{
        console.log(userHandle())
    },[])
    
  return (
    <div>
      {user.map((i)=>{
        return(
            <div>{i.title}</div>
        )
      })}
    </div>
  )
}

export default UserDetails
