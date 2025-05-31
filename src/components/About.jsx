import React from 'react'
import pic from '../library/pic.png'

export default function About() {
  return (
    <section id='about' className='min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6'>
      <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
        <figure data-aos='fade-right' data-aos-delay='500' className='flex justify-center relative'>
          <div className='sm:h-[300px] sm:w-[400px] lg:h-[500px]'>
            <img
              src={pic}
              alt="me"
              className='w-64 h-64 sm:w-96 sm:h-96 rounded-3xl shadow-lg object-cover border-2 border-white mx-auto'
            />

          </div>
        </figure>

        <article data-aos='fade-left' data-aos-delay='500' className='text-center lg:text-left relative'>

            <div className='absolute z-0 w-40 sm:w-60 sm:h-60 bg-[#cd3cfs] rounded-full blur-3xl opacity-50
            -top-5 left-10'>
                <header>
                  <h1 className='text-3x1 sm:text-4x1 md:text-5x1 lg:text-6x1 font-bold mb-4 sm:mb-6'></h1>
                </header>
            </div>
        </article>
        

      </div>
    </section>
  )
}
