import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

    const [nav,setNav] = useState(false);

    const links = [
        {
          id: 1,
          link: 'home',
        },
        {
          id: 2,
          link: 'About',
        },
        {
          id: 3,
          link: 'Portfolio',
        },
        {
          id: 4,
          link: 'Experience',
        },
        {
          id: 5,
          link: 'Contact',
        },
      ];

  return (
    <>
        <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4'>
            <div>
                <h1 className='text-6xl   font-signature ml-2 '>Trishit</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({id , link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-200' href="">{link}</li>
                ))}
            </ul>
            <div onClick={()=> setNav(!nav)} className=' cursor-pointer pr-4 z-10 text-gray-500 duration-200 md:hidden'>
                {nav ? <FaTimes size={20}/> : <FaBars size={20}/>}
                
            </div>
            
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black  to-gray-500'>

                        {links.map(({id,link})=>(
                            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link}</li>
                        ))}
                </ul>
            )}



        </div>
    </>
  )
}

export default Navbar