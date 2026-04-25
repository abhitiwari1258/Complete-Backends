import React from 'react'
import { NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <h1>Click on Link to Navigate the form page</h1>
        <div style={{border:"2px solid black", margin:"2px", padding:"10px"}}>
        <NavLink style={{marginRight:"10px"}} to={'/create-post'}>CreatePost</NavLink>
        <NavLink to={'/feed'}>Feed</NavLink>
        </div>
    </>
  )
}

export default Layout
