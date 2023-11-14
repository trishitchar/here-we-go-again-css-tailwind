import React from 'react'
import heroImage from '../assets/heroImage.png'
import { TiArrowRightOutline } from "react-icons/ti";

const Home = () => {
  return (
    <div name="home" className='h-screen text-white w-full bg-gradient-to-b from-black to-gray-500'>
        <div className='flex flex-col h-full items-center justify-center md:flex-row'>
            <div>
                <h2>I'm a full stack developer</h2>
                <p>I have 8 years of experience building and desgining software.
                Currently, I love to work on web application using technologies like
                React, Tailwind, Next JS and GraphQL.</p>
                <div>
                    <button>Portfolio</button>
                        <span>
                            <TiArrowRightOutline/>
                        </span>
                </div>
            </div>
            <div>
                <img src={heroImage} alt="my profile " className='w-2/3 rounded-2xl mx-auto md:w-full ' srcset="" />

            </div>
        </div>
    </div>
  )
}

export default Home