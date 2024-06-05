import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaJava,
  FaNodeJs,
  FaGithub,
  

} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobephotoshop,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  
} from "react-icons/si";

import { TbBrandCpp, TbBrandVscode , } from "react-icons/tb";
import { DiIllustrator } from "react-icons/di";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Languages',
        icons: [
          <TbBrandCpp/>,
          <FaJava />,
          <FaJs />,
         
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <SiTailwindcss/>,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaNodeJs/>,
          <SiExpress/>,
          <SiMongodb/>
          
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <DiIllustrator/>, <SiAdobephotoshop />],
      },
      {
        title: 'Others',
        icons: [<FaGithub />, <SiPostman/>, <TbBrandVscode/>],
      },

      
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Bachelor Of Engineering In Information Technology',
        stage: '2021-2025 | Shri Ramdeobaba College Of Engineering And Management Nagpur(RCOEM)',
       

      },
      {
        title: 'Higher Secondary Education',
        stage: '2019-2021 | Progressive Junior College,Gondia',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Web Developer @Blu-E',
        stage: '01/2024 | Present',
      },
      {
        title: 'Web Developer @Cognifyz',
        stage: '11/2023',
      },
      {
        title: 'AWS Academy Intern @AICTE',
        stage: '04/2024',
      },
      {
        title: 'Marketing Contributor @Blockchain Club',
        stage: '2023 | Present',
      },
    ],
  },
  
];


// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
// framer motion


import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter

import CountUp from "react-countup";


const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles /> {/* Render the Circles component */}
      {/* Avatar */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* text */}
        <div className="flex-1 flex flex-col justify-cenetr">
          <motion.h2 variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2">
            Developer <br/> <span className="text-accent">Coder</span>
            <br/>Deginer.
            </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0  xl:mb-4 px-2 xl:px-0">
          Hello! I'm Samiksha Gupta, a final-year student and enthusiastic web developer, 
          designer, and coder. Specializing in frontend development, I have a keen eye for
           design and a passion for creating seamless, interactive user experiences. My journey began 
           with a fascination for how technology transforms ideas into reality.
          </motion.p>
          <motion.p
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          Skilled in coding and problem-solving, I turn ideas into user-friendly solutions. With a
           focus on clean, adaptable code, every project I tackle is robust and developer-friendly.</motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Projects</div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={8} /> 
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Interships Experience </div>
              </div>
              {/* certificates */}
              <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Certificates </div>
              </div>
              {/* bore */}
              <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={500} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Connections </div>
              </div>

            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start">

            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2
                items-center text-white/60">
                  {/* title */}
                  <div className="font-light text-white mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>


                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    
    </div>
  );
};

export default About;
