// import React from 'react'
import logo from './../image/logo0.png'
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";



export const Header = () => {
  return (
    <header className='sticky top-0'>
   
        <div className='w-full bg-gray-200 py-1 flex justify-around items-center '>
            <div className="container sm:mx-10 mx-4 ">
                <div><img className='w-14' src={logo} alt="" /></div>
            </div>
            <div className='sm:mx-10 mx-4 flex justify-around w-32 md:w-20'>
              <a href="https://www.linkedin.com/in/venu-rm/" target='_blank'>
                <RiLinkedinBoxFill className='text-gray-600 hover:text-main-cl' size={28}/>
              </a>
              <a href="https://github.com/rmvenu2712/Thirukkural-Generator" target='_blank'>
                <BsGithub className='text-gray-600 hover:text-main-cl' size={25}/>
              </a>
            </div>
        </div>



        
    </header>

  )
}
