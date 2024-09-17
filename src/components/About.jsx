import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white'>

      <div className='max-w-screen-lg p-4 mx-auto  flex flex-col
      justify-center w-full h-full pt-16 md:h-screen sm:h-screen'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4
            border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-10'>
            Hi, I'm Abhaysinh Deshmukh, a Front-end Developer passionate about creating responsive, user-friendly
            websites and applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in
            building dynamic interfaces using React.js and Angular. I’m dedicated to delivering clean, efficient 
            code and continuously learning to stay updated with the latest trends. Eager to contribute to 
            innovative projects and bring ideas to life through thoughtful design and development.
        </p>

        <br/>

        <p className='text-xl'>
        As a recent graduate eager to dive into the tech industry, I'm constantly exploring new technologies 
        and best practices to enhance my skills. My goal is to create user-centric designs that are both 
        functional and aesthetically pleasing. Whether it's collaborating on a team project or tackling 
        challenges independently, I'm committed to delivering high-quality work and continuously learning 
        to stay ahead in the fast-paced world of web development.
        </p>
      </div>
    </div>
  )
}

export default About
