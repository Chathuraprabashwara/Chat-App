import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
function SearchInput() {
  return (
    <form className='flex items-center gap-2 justify-center'>
        <input  type='text' placeholder='Search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-orange-500 text-white border-transparent'>
            <BiSearchAlt className='w-6 h-6 outline-none'/>
        </button>
    </form>
    )
}

export default SearchInput