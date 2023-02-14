import React from "react";
import { Link } from "react-router-dom";


export const ComponentOne = ({params})=>{

    return (
        <div>
            <Link to="/first/second">firstComponet</Link>
        </div>
    )

   }
   export const ComponentTwo = ()=>{

    return (
        <div>
            <Link to="/first/second/third">SecondComponet</Link>
        </div>
    )

   }
   export const ComponentThree = ()=>{

    return (
        <div>
            <Link to="/first">ThirdComponet</Link>
        </div>
        
    )

   }
export const MyComponent = ({children})=>{

    
    
 


   
  return (
    <div>
        <h4>Task 3</h4>
      {children}
        
    </div>
  )
}
