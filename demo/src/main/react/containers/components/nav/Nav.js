import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Nav = () => {




  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Home
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="Cards">Cards</a>
            </li>
            <li class="nav-item">
                <a class = "nav-link" href="Sets"> Sets </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>

  )
}
export default Nav