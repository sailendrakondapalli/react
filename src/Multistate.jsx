

import React,{useReducer,useEffect} from 'react'
import loading from './pizzaninjas-pizza-ninjas.gif'

const fetchinit="fetchinit"
const fetchsucess="fetchsucess"
const fetcherror="fetcherror"

const initialstate={
   loading:true,
   data:null,
   error:null
}

const fun=(state,action)=>{
        switch (action.type) {
            case fetchinit:
                return{...state,loading:true,error:null}
                case fetchsucess:
                    return{...state,loading:false,data:action.payload}
                    case fetcherror:
                        return {...state,loading:false,error:action.payload}
                
        
            default:
                return state
        }
}

const Multistate = () => {
    const[state,dispatch]=useReducer(fun,initialstate)
    
    const handle=async()=>{
        try {
            dispatch({type:fetchinit})
        const response=await fetch("https://jsonplaceholder.typicode.com/posts")
        const neww= await response.json()
        dispatch({type:fetchsucess,payload:neww})
        } catch (error) {
            dispatch({type:fetcherror})
        }
    }
useEffect(()=>{
    console.log(handle())
},[])
  return (
    <div>
      {state.loading&& 
      <>
      <div className='gif-container'>
        <img src={loading} alt='loading'/>
      </div>
      </>
      
      }
      {state.data&&<div>
        <h2>
            heyyyyy your data is here
        </h2>
            {state.data.map((i)=>{
                return(
                    <div>
                        
                        
                        {i.body}
                        
                    </div>
                )
            })}

        </div>}
        {state.error&& <div>{alert(state.error)}</div>}
    </div>
  )
}

export default Multistate
