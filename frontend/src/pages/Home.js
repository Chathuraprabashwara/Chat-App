import React from 'react'
import Sidebar from '../Components/SideBar/Sidebar.js'
import MessageContainer from '../Components/Messages/MessageContainer.js'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] bg-white-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50  shadow-inner border  border-gray-300 '>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home