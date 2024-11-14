
import { useState } from "react";


export default function Home() {
  
  const [x, setX]= useState(0)
    const [y, setY]= useState(0)
  
    const handleMove = (event) =>{
      console.log('event');
      
     setX(event.clientX) 
     setY(event.clientY) 
  }

  return (
       <div>
          <div className='h-[100vh]' style={{ background : `rgb(${x},${y},${y/x}`}} onMouseMove={handleMove}>
        {/* <h1 style={{fontSize: x / 2.5 + 'px', position: 'absolute', top: y, left: x}}>Text</h1> */}
        <h1 style={{fontSize:'20px', position: 'absolute', top: y, left: x}}>Text</h1>

    </div>

       </div> 
      );
}
