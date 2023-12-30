import React from 'react'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex mx-1'> 
<Sidebar/>

<div>
  <Outlet/>
{/*
<VideoContainer/>
<WatchContainer/> */}
</div>
    </div>
  )
}

export default Body 