import React from 'react';
import heroImage from '../assets/heroImage.png';
import { TiArrowRightOutline } from 'react-icons/ti';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full text-white bg-gradient-to-b from-black via-black to-gray-500">
        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center m-auto h-full">
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-4">
                I'm a full stack developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
                I have 8 years of experience building and designing software. Currently, I love to work
                on web applications using technologies like React, Tailwind, Next.js, and GraphQL.
            </p>
            <div className="flex items-center">
                <button className="group flex items-center mt-4 text-xl text-white w-fit bg-gradient-to-r  from-cyan-500 to-blue-500 py-3 px-6 rounded-md hover:bg-green-600 cursor-pointer">
                Portfolio
                
                <span className=" ml-4 text-white-500 group-hover:rotate-90 duration-200 ">
                <TiArrowRightOutline size={25} />
                </span>
                </button>
            </div>
            </div>
            <div className="flex">
            <img
                src={heroImage}
                alt="my profile"
                className="flex w-2/3 rounded-2xl mx-auto shadow-lg"
            />
            </div>
        </div>
    </div>
  );
};

export default Home;
