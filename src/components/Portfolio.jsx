import React from 'react'
import sqlpng from '../assets/portfolio/SQL.png'
import csuf from '../assets/portfolio/csuf.png'
import audioconvert from '../assets/portfolio/AudioConvert.png'
import lessons from '../assets/portfolio/lessons.png'
import workle from '../assets/portfolio/workle.png'
import portfolio from '../assets/portfolio/portfolio.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: sqlpng,
      link: 'https://github.com/jllewis11/SQL-Database-Project'
    },
    {
      id: 2,
      src: csuf,
      link: 'https://github.com/jllewis11/titan-talks-2.0'
    },
    {
      id: 3,
      src: lessons,
      link: 'https://github.com/jllewis11/Python-Project-Lessons'
    },
    {
      id: 4,
      src: workle,
      link: 'https://github.com/jllewis11/WorkleV3'
    },
    {
      id: 5,
      src: audioconvert,
      link: 'https://github.com/jllewis11/Audio-Convert'
    },
    {
      id: 6,
      src: portfolio,
      link: 'https://github.com/jllewis11/jllewis11.github.io'
    }
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
