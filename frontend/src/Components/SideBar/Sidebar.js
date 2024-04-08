import React from 'react'
import SearchInput from './SearchInput.js'
import ConversationsContainer from './ConversationsContainer.js'
import LogoutButton from './LogoutButton.js'

function Sidebar() {
  return (
    <div className='border-r border-gray-300 p-4 flex flex-col shadow-inner rounded-tl-xl'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <ConversationsContainer/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar