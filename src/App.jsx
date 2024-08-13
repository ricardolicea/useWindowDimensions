import "./styles.css";
import React, { useEffect, useState } from "react";

/* Instruction
 Create a custom hook to track the dimensions of users window while resizing.*/

function useWindowDimensions() {
  const element = document.getElementById("root")
  const[width, setWidth] = useState(0)
  const[height, setHeight] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.outerWidth)
      setHeight(window.outerHeight)
      
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])



  
  return {
    width: width,
    height: height
  };
}

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="App">
      <h2>width: {width + "px"}</h2>
      <h2>height: {height + "px"}</h2>
      <p>Resize the window to see dynamic width and height</p>
    </div>
  );
}
