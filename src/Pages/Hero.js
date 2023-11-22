import Typewriter from 'typewriter-effect';
import img from '../assets/img1.png';
import './hero.css';

export const Hero = () => {
  return (
    <main className="flex flex-col justify-center items-center ">
      <div className='component App w-full px-4'>
        <section className='flex flex-col md:flex-row items-center justify-between py-20 md:py-30'>
          <div className='text-center md:text-left mb-8 md:mb-0 md:mr-8 '>
            <h1 className=' font-extrabold text-4xl md:text-5xl tracking-widest'>
              Hi, <span className='wave'>👋 </span><br />
              I'm <span className=' text-purple-700 text-5xl md:text-6xl dark:text-white'>Cristel Aban</span>
              <Typewriter 
                options={{
                  strings: ['a Full Stack Web Developer', 'PHP Laravel Developer', 'React.JS Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <img className='w-48 h-auto mx-auto md:mx-0 md:w-96' src={img} alt='Picture' />
        </section>
      </div>
    </main>
  );
};
