import React from 'react'
import { ParkingSlot } from './ParkingSlot/ParkingSlot'
import { Rectangle } from './Rectangle/Rectangle'
import { MyComponent } from './TaskThree/MyComponent'

export const Home= ({children}) => {
  return (
    <div>   
        
            <Rectangle/>
            <ParkingSlot/>
            <MyComponent children={children}/>
    </div>
  )
}
