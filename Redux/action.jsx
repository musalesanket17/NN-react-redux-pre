import { DECREMENT, INCREMENT } from "./actiontype"


export const increment =(payload)=>({
    
      type:INCREMENT,
      payload
     
})

export const decrement =(payload)=>({
   type:DECREMENT,payload

})