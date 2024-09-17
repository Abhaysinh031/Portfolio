import React from 'react'
import WomenSafety from '../assets/portfolio/women_safety_loader.jpg'
import CovidVaccineCenter from '../assets/portfolio/image.png'

const Portfolio = () => {

    const Portfolio =[
        {
            id: 1,
            src: WomenSafety,
        },
        {
            id: 2,
            src: CovidVaccineCenter
        }
    ]


  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800
    w-full text-white md:h-screen'>

      <div className='max-w-screen-lg p-4 pt-11 mx-auto flex flex-col justify-center
      w-full h-full'>

        <div className='pb-8 mt-20'>
            <p className='text-4xl font-bold inline border-b-4
            border-gray-500'>
                Portfolio
            </p>
            <p className='py-6'>Check out some of my work here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px-8'>

        {
            Portfolio.map(({id,src})=> (
                
            
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg w-full h-61'>
                    <img src={src} alt='' className='rounded-md
                    duration-200 hover:scale-185 h-80 w-full '/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105'>
                        Demo
                        </button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105'>
                        Code
                        </button>
                    </div>
                </div>

            ))
        }
        </div>
        
      </div>
    </div>
  )
}

export default Portfolio
