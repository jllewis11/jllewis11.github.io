import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
//import Panda from './panda_model/Panda'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h4 className="text-4xl sm:text-7xl font-bold text-white">
            Software Engineer
          </h4>
          <p className="text-gray-500 py-4 max-w-md">
            Currently, I am a first year Graduate Student at San Jose State
            University where I am pursuing a M.S. in Computer Science focusing
            on Cloud Computing and Database Systems. I am proficient in Python,
            C++, and Typescript. I have some experience working with React,
            Node.js, GraphQL, and SQL databases.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl mx-auto w-1/2 md:w-3/5">
          {/* <Panda /> */}
          <img
            src={HeroImage}
            alt="my profile"
            //rounded-2xl mx-auto w-2/3 md:w-full with smaller image size
            className="rounded-2xl mx-auto w-1/2 md:w-3/5"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
