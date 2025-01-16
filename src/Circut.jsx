

import React, { useState } from 'react'




const Circut = () => {
    const[game,setGame]=useState(true)
    const Myg=()=>{
        
        return(
            <div>
                i love ok
            </div>
        )
    }
  return (
    <div>
      { game && <Myg/>}
    </div>
  )
}

export default Circut
 