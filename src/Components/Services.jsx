import React, { useContext } from 'react'
import './Services.css'
import { Mycontext } from "../App";

const dark = { color: "white", backgroundColor: "#0f172a" };
const light = { color: "black", backgroundColor: "white", width: "100%" };


export const Services = () => {
    const context = useContext(Mycontext);
  return (
    <div className='services' style={context.theme ? dark : light}>
        <h1>Our service are not available</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, molestiae. Dolorem, doloribus. Rem, nam voluptatibus.</p>
    </div>
  )
}
