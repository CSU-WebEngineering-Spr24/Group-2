import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Nav = () => {




  return (

    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme ="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Hearthstone
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="CardSearch">Cards</a>
            </li>
            <li className="nav-item">
                <a className = "nav-link active"  aria-current="page" href="CardSets"> Sets </a>
            
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
export default Nav
