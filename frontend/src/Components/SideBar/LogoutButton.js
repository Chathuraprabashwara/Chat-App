import React from 'react'

import { BiLogOut } from 'react-icons/bi'
function LogoutButton() {
  return (
    <div className='mt-auto ' >
      <div className='rounded-full bg-orange-500 w-12 h-12 items-center flex hover:bg-black  '>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer left-2 relative '/>

      </div>
    </div>
  )
}

export default LogoutButton