import { Routes, Route } from 'react-router-dom';
import { Hero, Contact, About, Projects, } from '../Pages';
// import ParticlesBg from 'particles-bg'


export const AllRoutes = () => {
  return (
    <div className="dark:bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600 " >
{/* <ParticlesBg num={10} type="square" bg={true} /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
};
