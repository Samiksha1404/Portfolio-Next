next image
import Image from "next/image";

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from '../components/Avatar'
import { BsArrowRight } from 'react-icons/bs';
// framer motion

import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

// resume function
function handleResumeClick() {
  const resumePDF = '/Samiksha-resume.pdf';
  window.open(resumePDF, '_blank');
}

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full  bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center  xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1 variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
             className="h1">
            Crafting Dreams <br />  with {' '}
            <span className="text-accent"> Code and Design</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl xl:text-md sm:text-sm mx-auto xl:mx-0 mb-10 xl:mb-16">
            As a seasoned full-stack developer, I craft unique web applications that push the boundaries 
            of innovation. Dive into my portfolio to see my latest projects, read insightful articles,
             and connect with me to collaborate on turning your vision into a digital reality.
          </motion.p>
          <div className="flex items-center">
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />  
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>

            {/* <button
              className="btn ml-16 rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              type="button"
              onClick={handleResumeClick}
            >
              <span
                className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500"
              >
                Resume
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              />
            </button> */}
            </div>

        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        {/* particle */}
        <ParticlesContainer />

        {/* avtar */}
        <motion.div variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{duration:1 , ease: 'easeInOut'}}
        //     className="w-full h-full max-w-[737px] max-h-[600px] absolute -bottom-34
        // lg:bottom-0 lg:right-[9%]">
        className="w-full h-full max-w-[700px] max-h-[550px] absolute -bottom-32
        lg:bottom-0 lg:right-[3%]">
        <Avatar />
        </motion.div>
      </div>

    </div>

  );
};

export default Home;
