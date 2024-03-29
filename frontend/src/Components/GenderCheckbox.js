import React from 'react'

export default function GenderCheckbox() {
  return (
    <div className='flex'>
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text text-black'>Male</span>
            <input type='checkbox' className='radio radio-warning' />
        </label>
        </div>
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text text-black'>Female</span>
            <input type='radio' className='radio radio-warning' />
        </label>
        </div>
    </div>
  )
}
