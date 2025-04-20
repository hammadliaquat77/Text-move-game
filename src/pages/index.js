
// import { useState } from "react";


// export default function Home() {
  
//   const [x, setX]= useState(0)
//     const [y, setY]= useState(0)
  
//     const handleMove = (event) =>{
//       console.log('event');
      
//      setX(event.clientX) 
//      setY(event.clientY) 
//   }

//   return (
//        <div>
//           <div className='h-[100vh]' style={{ background : `rgb(${x},${y},${y/x}`}} onMouseMove={handleMove}>
//         {/* <h1 style={{fontSize: x / 2.5 + 'px', position: 'absolute', top: y, left: x}}>Text</h1> */}
//         <h1 style={{fontSize:'20px', position: 'absolute', top: y, left: x}}>Text</h1>

//     </div>

//        </div> 
//       );
// }
















import { useState, useEffect } from "react";

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Get window size for scaling
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // Optional: update on resize
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMove = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  // Normalize values to 0–255 range for background
  const r = Math.min(255, Math.round((x / windowSize.width) * 255));
  const g = Math.min(255, Math.round((y / windowSize.height) * 255));
  const b = Math.min(255, Math.round((x + y) / (windowSize.width + windowSize.height) * 255));

  const fontSize = Math.max(16, r / 1.5); // minimum 16px

  return (
    <div
      className="h-screen w-screen"
      style={{ background: `rgb(${r}, ${g}, ${b})`, position: "relative" }}
      onMouseMove={handleMove}
    >
      <h1
        style={{
          position: "absolute",
          top: y,
          left: x,
          fontSize: `${fontSize}px`,
          color: "#fff",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      >
        Text
      </h1>
    </div>
  );
}
