import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './containers/components/nav/Nav';
import { Outlet } from 'react-router-dom';
const AppContainer = () => {



//Meant to act as the homepage eventually but for some reason will not display any information on the front end.
  return (
    <>
      <Nav />
      <Outlet />
      
    </>
  )
}
export default AppContainer
