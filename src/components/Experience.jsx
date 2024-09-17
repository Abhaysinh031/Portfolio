import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import reactjs from '../assets/react.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';
import python from '../assets/python.png';
import django from '../assets/django.png';

const Experience = () => {

    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style:'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style:'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactjs,
            title: 'React Js',
            style:'shadow-blue-600'
        },
        {
            id: 5,
            src: node,
            title: 'Node Js',
            style:'shadow-green-300'
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id: 7,
            src: github,
            title: 'GitHub',
            style:'shadow-gray-400'
        },
        {
            id: 8,
            src: python,
            title: 'Python',
            style:'shadow-blue-600'
        },
        {
            id: 9,
            src: django,
            title: 'Django',
            style:'shadow-green-400'
        },
    ]


  return (
    <div name='experience' className='bg-gradient-to-b
    from-gray-800 to-black w-full h-screen  ' >
      <div className='max-w-screen-lg mx-auto p-4  flex flex-col
      justify-center w-full h-full text-white '>
        <div className='mt-36'>
            <p className='text-4xl font-bold border-b-4
            border-gray-500 p-2 inline md:mt-5'>Experience</p>
            <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0'>

            {
                tech.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500
                    py-2 rounded-lg ${style}`}>
                        <img src={src} alt='' className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))
            }

            
        </div>
      </div>
    </div>
  )
}

export default Experience
