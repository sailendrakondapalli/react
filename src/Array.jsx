

import React from 'react'

const players=[{
    name:"dhoni",
    age:42,
    village:"ranchi"
},{
    name:"kohli",
    age:35,
    village:"delhi"
},{
    name:"me",
    age:19,
    village:"pypt"
}]

const Array = () => {

  return (
    <div>
      <h2>array</h2>
      {players.map((i)=>{
return(
    <div>
        {i.name}
    </div>
)
      })}
    </div>
  )
}

export default Array
