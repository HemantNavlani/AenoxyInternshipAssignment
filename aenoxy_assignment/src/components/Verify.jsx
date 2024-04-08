import React from 'react'
import mailIcon from '../assets/mailIcon.png'
function Verify() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-3xl font-bold mt-12'>Please verify your email...</h1>
    <img src={mailIcon} alt="" className='h-30 w-32 mt-4' />
    <p className='text-gray-500 mt-4'>Please verify your email address. We&apos;ve sent a confirmation email to : </p>

    <p className='font-bold text-lg mt-4'>email</p>

    <p className='text-gray-500 mt-4'>Click the confirmation link in that email to begin using Dribbble.</p>
    <p className='text-gray-500 mt-4 text-center'>Didn&apos;t receive the email? Check your Spam folder, it may have been caught by a filter. If <br /> you still don&apos;t see it, you can <span className='font-semibold text-[#EA4B8B]'> resend the confirmation email. </span></p>

    <p className='text-gray-500 mt-4 mb-16 '>Wrong email address?  <span className='text-[#EA4B8B] font-semibold'>Change it.</span></p>

    </div>
  )
}

export default Verify