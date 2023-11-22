import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import Marquee from "react-fast-marquee";
import img from '../assets/bg2.png'

export const About = () => {
  return (
    <main className="flex flex-col justify-between">
      <div className='component flex flex-col md:flex-row md:items-center md:justify-between pt-10 md:pt-26 px-4 md:px-8'>
        <img className='mx-auto md:ml-0 max-w-lg md:w-86 max-w-full h-auto md:h-auto' src={img} alt='Picture' />
        <h2 className='translate-content text-center font-bold text-sm md:text-base dark:text-white mb-36 md:ml-16'>
          As a graduate who specializes in stack development I have a strong command of various programming languages and frameworks such as HTML, CSS, JavaScript, React, Tailwind, PHP, Laravel, MongoDB, and MySQL. I possess a passion for designing appealing and functional websites and applications. Continuously seeking challenges and opportunities to enhance my skills is something I actively pursue. You can explore my portfolio to see some of the projects I have worked on. These projects demonstrate my ability to collaborate with clients in order to create tailored solutions that meet their requirements. Whether it's an e-commerce platform or a social media site, I am confident in my capacity to deliver results that surpass expectations.
        </h2>
      </div>
      <div className="pb-16 pt-10 px-4 md:px-8">
        <div className="overflow-x-auto">
          <Marquee
            gradient={false}
            speed={100}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
            className="flex justify-start"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box mx-4" key={id}>
                <img className='skill-image h-20 w-28 md:w-48 ' src={skillsImage(skill)} alt={skill} />
                <p>{skill}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </main>
  )
}

