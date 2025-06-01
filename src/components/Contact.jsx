
export default function Contact() {
  return (
    <section id='contact' data-aos='fade-up' data-aos-delay='500'
    className='min-h-screen flex flex-col items-center justify-center px-4 py-16 text-white'>

      <h1 className='text-4xl font-bold mb-8 text-center'>
        Contact Me
      </h1>

      <form
        action='https://formsubmit.co/sadishthapa2004@gmail.com'
        method='POST'
        className='w-full max-w-xl bg-gray-800 rounded-lg p-8 shadow-lg space-y-4'
      >
        <input type='hidden' name='_captcha' value='false' />
        <input type='hidden' name='_next' value='http://localhost:5173/' />

        <div>
          <label className='block text-sm font-semibold mb-1' htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none'
            placeholder='Your name'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-semibold mb-1' htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none'
            placeholder='your email'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-semibold mb-1' htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            rows='5'
            className='w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none'
            placeholder='Your message'
            required
          >
          </textarea>
        </div>

        <button
          type='submit'
          className='w-full text-white border-2 py-2 px-6 focus:outline-none rounded-full text-lg'
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
