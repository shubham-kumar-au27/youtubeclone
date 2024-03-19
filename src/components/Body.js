import React from 'react'
import Sidebar from './Sidebar'
import {Outlet} from 'react-router-dom';
import Maincontainer from './Maincontainer'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Outlet/>
      
    </div>
  )
}

export default Body
