import React, { useContext } from 'react'
import { Mycontext } from "../App";
import './Button.css'



const dark = { color: "white", backgroundColor: "#0f172a" };
const light = { color: "black", backgroundColor: "white", width: "100%" };


const darkbtn = { color: "black", backgroundColor: "#5ddbf7" };
const lightbtn = { color: "white", backgroundColor: "#0f172a" };

export const Button = () => {
    const context = useContext(Mycontext);
  return (
    <div className='btn' style={context.theme ? dark : light}>
         <button
        style={context.theme ? darkbtn : lightbtn}
        onClick={() => {
          context.setTheme(!context.theme);
        }}
      >
        Toggle Theme to {context.theme ? "Light" : "Dark"}
      </button>
    </div>
  )
}
