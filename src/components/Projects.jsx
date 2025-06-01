import React from 'react';
import project1 from '../library/project1.png';
import project2 from '../library/project2.png';

const projects = [
  {
    id: 1,
    image: project1,
    title: 'NBA Fantasy Discord Bot',
    description: 'An interactive discord bot that displayed 2024-2025 NBA fantasy points.',
    link: 'https://github.com/SadishThapa/NBA-Bot',
  },
  {
    id: 2,
    image: project2,
    title: 'NBA Higher Or Lower App',
    description: 'Android app that puts a twist on the higher or lower game using NBA player stats',
    link: 'https://github.com/SadishThapa/NBAHigherOrLowerApp',
  },
];

export default function Projects() {
  return (
    <section id='projects'
    data-aos='fade-right'
    data-aos-delay='500'
    className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-12'
    >
      <h1 className='text-4xl font-bold mb-12 text-center'>
        Projects
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full text-center'>
        {projects.map((project) => (
          <div key={project.id} className='bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
            <div className='relative group'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-64 object-cover'
              />

              <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-white text-black font-semibold px-6 py-2 rounded'
                >
                  View Project
                </a>
              </div>
            </div>

            <div className='p-4 text-center'>
              <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
              <p className='text-gray-300 text-sm'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
