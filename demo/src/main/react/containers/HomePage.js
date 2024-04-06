import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './components/nav/Nav';
import { Outlet } from 'react-router-dom';
const HomePage = () => {




  return (
    <>
      <Nav />
      <Outlet />
      
    </>
  )
}
export default HomePage