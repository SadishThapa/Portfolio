import css from '../library/css.png';
import html from '../library/html.png';
import java from '../library/java.png';
import javascript from '../library/javascript.png';
import kotlin from '../library/kotlin.png';
import python from '../library/python.png';

const SkillsData = [
  { id: 1, image: python, title: 'Python', description: '3 years of experience' },
  { id: 2, image: java, title: 'Java', description: '3 years of experience' },
  { id: 3, image: kotlin, title: 'Kotlin', description: '8 months of experience' },
  { id: 4, image: javascript, title: 'JavaScript', description: '3 years of experience' },
  { id: 5, image: html, title: 'HTML', description: '2 year of experience' },
  { id: 6, image: css, title: 'CSS', description: '2 year of experience' },
];

export default function Skills() {
  return (
    <section id='skills'
    data-aos='fade-right'
    data-aos-delay='500'
    className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-12'>

      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12'>
        My Experience and Skills
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full text-center'>
        {SkillsData.map((skill) => (
          <div
            key={skill.id}
            className='flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-all duration-300'
          >
            <img
              src={skill.image}
              alt={skill.title}
              className='w-20 h-20 object-contain mb-4'
            />
            <h3 className='text-xl font-bold'>{skill.title}</h3>
            <p className='text-sm text-gray-400'>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
