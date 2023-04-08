import React from 'react'

const NavBar = ({title}) => {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
        <span className="navbar-brand mb-0 h1">{title}</span>
    </nav>
  )
}

export default NavBar