import React from 'react'
import pic from '../library/pic.png'

export default function About() {
  return (
    <section id='about' className='min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6'>
      <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
        <figure data-aos='fade-right' data-aos-delay='500' className='flex justify-center relative'>
          <div className='sm:h-[300px] sm:w-[400px] lg:h-[450px]'>
            <img
              src={pic}
              alt="me"
          className='w-full h-auto rounded-3xl shadow-lg object-cover border-2 border-white mx-auto'
            />

          </div>
        </figure>

        <article data-aos='fade-left' data-aos-delay='500' className='text-center lg:text-left relative'>

    
                <header>
                  <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
                    About Me
                  </h1>
                </header>

<p className='text-xl sm:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed'>
                  Hi, I'm Sadish, I'm passionate in learning new technologies and finding ways to tackle problems.
                  I became interested in Computer Science during high school where I built computers and was introduced to programming.
                  Since then, I pursued and completed my B.S. in Computer Science at the University of Maryland.
                </p>
        </article>
        

      </div>
    </section>
  )
}
