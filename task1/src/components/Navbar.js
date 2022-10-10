import React from 'react'
import { Outlet, Link } from "react-router-dom";
import data from './mockData.json'



export default function Navbar() {
    const handleNav = function(e){
        let classlist = document.querySelectorAll('.nav-link')
        classlist.forEach(x => x.classList.remove('active'))
        e.target.classList.add('active')
    }

    const navStyles = {
        textDecoration: 'none'
    }


  return (
        <>
    <div className="container my-3">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <Link to='./components/Delivered.js' style={navStyles}><button className="nav-link active" id="delivered" onClick={(e)=>handleNav(e)} data-bs-toggle="tab" style={{color:'black'}} htmlType="button" role="tab">Delivered <span class="badge mx-1" style={{backgroundColor: '#FF7427'}}>{data.length}</span></button></Link>
          </li>
          <li className="nav-item" role="presentation">
          <Link to='./components/Return.js' style={navStyles}><button className="nav-link" id="returned" onClick={(e)=>handleNav(e)} data-bs-toggle="tab" style={{color:'black'}}  data-bs-target="#profile" htmlType="button" role="tab">Cancelled/Returned <span class="badge mx-1" style={{backgroundColor: '#FF7427'}}>{2}</span></button></Link>
          </li>
          <li className="nav-item" role="presentation">
          <Link to='./components/subs.js' style={navStyles}><button className="nav-link" id="subs" onClick={(e)=>handleNav(e)} data-bs-toggle="tab" style={{color:'black'}}  data-bs-target="#contact" htmlType="button" role="tab">Subscriptions <span class="badge mx-1" style={{backgroundColor: '#FF7427'}}>{2}</span></button></Link>
          </li>
      </ul>
    </div>
    <Outlet/>
    </>
  )
}
