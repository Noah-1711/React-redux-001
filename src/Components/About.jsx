import React, { useContext } from "react"
import './About.css'

import { Mycontext } from "../App";

const dark = { color: "white", backgroundColor: "#0f172a" };
const light = { color: "black", backgroundColor: "white", width: "100%" };



 export const About =() => {
    const context = useContext(Mycontext);

    return(
      <div className="about" style={context.theme ? dark : light}> 
      <h1>You can mail me at help@NoahNirmal.in</h1>
      </div>
    )

}