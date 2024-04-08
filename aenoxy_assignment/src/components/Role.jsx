import React, { useState } from 'react'
import roleImg1 from '../assets/roleImg1.png'

import { FaCheck } from "react-icons/fa";
function Role({image,text1,text2}) {
    const [checked,setChecked] = useState(false)
    const handleClick = ()=>{
        setChecked(!checked)
    }
  return (
    <>
    <div className={`w-64 h-64 border border-gray-300 flex flex-col p-2 space-y-2 justify-center items-center rounded-xl ${checked ? 'border border-2 border-[#E84B89]' :''}`}>
   
    <img src={image} alt="" className={`${
        checked ? 'relative mt-[-150px] size-48 z-10':''
    }`} />

    <h3 className='text-center font-bold'>{text1} </h3>

    {
    checked && (
        <p className='text-center text-gray-500'>
            {text2}
        </p>
    )
    }
    <button className={`w-5 h-5 border rounded-[100%] border-gray-400 ${
        checked
          ? 'bg-[#E84B89] border-none'
          : ''
      }`} onClick={handleClick}>

    <FaCheck className='text-white size-3 ml-[4px]'/>
      </button>


    </div>
    </>
  )
}

export default Role