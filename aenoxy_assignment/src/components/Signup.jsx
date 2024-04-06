import React, { useState } from 'react'
import signupImg from '../assets/signupPageArt.png'
import dribbleLogo from '../assets/dribbleLogo.png'
function Signup() {
    const [error,setError] = useState(null)
  return (
    <>
    <div className='flex'>

    <div className='w-1/3 h-screen bg-[#F2D184] flex flex-col justify-evenly items-center'> 
            <div>
            <img src={dribbleLogo} className='h-12 flex justify-start mb-10' alt="" />
            <p className='text-2xl font-bold text-[#8A661B] text-left ml-4'>Discover the world&apos;s top <br /> Designers & Creatives </p>
            </div>
            <img src={signupImg} alt="" className='text-center'/>
            <p className='text-[#8A661B] text-left ml-[-120px]'>Art by <a href="https://petertarka.com/" className='underline'>Peter Tarka</a></p>
        </div>

        <div className='w-2/3'>
        <div className='text-3xl font-bold'>Sign up to Dribble</div>
        {
            error && (<span className="text-[#E05F6A] mt-8"> {error}</span>)

        }
        <form action="">
            <div className='flex'>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" className='bg-[#F3F3F3] rounded' name="" id="" />
                <br />
                <label htmlFor="name">Username</label>
                <br />
                <input type="text" className='bg-[#F3F3F3] rounded' name="" id="" />
            </div>

            <label htmlFor="email">Email</label>
            <br />
            <input type="email" className='bg-[#F3F3F3] rounded' name="" id="" />
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input type="password" className='bg-[#F3F3F3] rounded' name="" id="" />
            <br />

            <input type="checkbox" name="" id="" />
            <label htmlFor="">Creating an account means you&apos;re okay with our <a href="/" className='text-[#6456ad]'>Terms of Service</a> ,  <a href="/" className='text-[#6456ad]'>Privacy Policy</a> , and our default   <a href="/" className='text-[#6456ad]'>Terms of Service</a> ,  <a href="/" className='text-[#6456ad]'>Notifiation Settings</a></label>

            <br />
            <button>
                Create Account
            </button>
        </form>
        </div>
    </div>


    
  
    </>
    
  )
}

export default Signup