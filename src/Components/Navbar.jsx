import React, { useState } from 'react'
import './Navbar.css'
import { toggledarktheme } from '../Redux/action'
import {useDispatch} from 'react-redux'

export const Navbar = () => {
    const dispatch= useDispatch()
    const data=[{
        hello:"heello"
    }]
  return (
    <div className='navbar'>
        <h1>Geekster</h1>
        <div className="navbarcontent">
            <a href=""> home</a>
            <a href="">contact</a>
            <a href="">service</a>
        </div>
        <button onClick={()=>{
            dispatch(toggledarktheme(data))
            console.log("hello")
       
            
        }}>toggel dark</button>
    </div>
  )
}
