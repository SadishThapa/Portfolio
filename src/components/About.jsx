import pic from '../library/pic.png'

export default function About() {
  return (
    <section id='about' className='min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6'>
      <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
        <figure data-aos='fade-right' data-aos-delay='500' className='flex justify-center relative'>
          <img
            src={pic}
            alt='me'
            className='w-[200px] h-[250px] sm:w-[250px] sm:h-[300px] lg:w-[400px] lg:h-[450px] rounded-3xl shadow-lg object-cover border-2 border-white mx-auto'
          />
        </figure>
        <article data-aos='fade-left' data-aos-delay='500' className='text-center lg:text-left relative'>
          <header>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
              About Me
            </h1>
          </header>
          <p className='text-xl sm:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed'>
            I'm Sadish Thapa, a full stack Software Engineer and recent Computer Science graduate from the University of Maryland with
            a passion for building impactful software. I enjoy turning ideas into real-world solutions
            through code.
          </p>
        </article>
      </div>
    </section>
  )
}
