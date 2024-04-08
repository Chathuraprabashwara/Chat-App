import React from 'react'

export default function GenderCheckbox({selectedGender,onCheckboxChange}) {
  return (
    <div className='flex'>
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? " selected" : ""}`} >
            <span className='label-text text-black'>Male</span>
            <input type='checkbox' className='checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.orange.200)] [--chkfg:orange]' onChange={()=> onCheckboxChange("male")} checked= {selectedGender === "male"} />
        </label>
        </div>
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? " selected" : ""}`}>
            <span className='label-text text-black'>Female</span>
            <input type='checkbox' className='checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.orange.200)] [--chkfg:orange]' onChange={()=> onCheckboxChange("female")} checked= {selectedGender === "female"}  />
        </label>
        </div>
    </div>
  )
}
