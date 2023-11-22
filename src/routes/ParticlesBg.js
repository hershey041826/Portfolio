// import ParticlesBgOriginal from "particles-bg";

// const ParticlesBg = ({ num, type, bg }) => {
//   return (
//     <ParticlesBgOriginal
//       num={num}
//       type={type}
//       bg={bg}
//       config={{
//         particles: {
//           color: "#FFC0CB",
//           shape: "circle",
//           opacity: 0.3,
//           size: 3,
//           speed: 0.5,
//           links: {
//             enable: true,
//             distance: 100,
//           },
//         },
//       }}
//     />
//   );
// };

// export default ParticlesBg;

import React from 'react';
import ParticlesBg from 'particles-bg';

const Particles = ({ darkMode }) => {
  const particleConfig = {
    num: 30,
    type: 'cobweb',
    bg: true,
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <ParticlesBg {...particleConfig} />
    </div>
  );
};

export default Particles;