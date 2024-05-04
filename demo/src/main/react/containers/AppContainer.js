import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './containers/components/nav/Nav';
import { Outlet } from 'react-router-dom';
const AppContainer = () => {




  return (
    <>
      <Nav />
      <Outlet />
      
    </>
  )
}
export default AppContainer
