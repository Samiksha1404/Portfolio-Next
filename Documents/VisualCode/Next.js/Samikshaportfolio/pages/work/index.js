

// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ProjectCard from "../../components/ProjectCard"
// framer motion
import {motion} from "framer-motion"
import {fadeIn} from "../../variants"
const Work = () => {
  return (
     <div className=" bg-primary/30 py-36 flex items-center">
     <Circles/>
     <div className="container mx-auto ">
     <div className=" justify-center flex flex-col xl:flex-row gap-x-8">
      {/* text */}
      <div className="text-center justify-center items-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
        <motion.h2 
        variants={fadeIn('up',0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h2 xl:mt-12">
        My Projects <span className="text-accent">.</span>
        </motion.h2>
        <motion.p 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
         className="mb-4 mx-auto justify-center items-center lg:mx-0">
         Explore my diverse portfolio, featuring a range of projects that highlight my expertise and creativity across various domains.
        </motion.p>
      </div>
      {/* slider */}
      {/* <motion.div
      variants={fadeIn('down',0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
       className="w-full xl:max-w-[65%]">
      <WorkSlider/>
     </motion.div> */}
     </div>

      <motion.div
      variants={fadeIn('down',0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'>
        <ProjectCard />
      </motion.div>
     
      <Bulb/>
     </div>
  </div>
  
);
};

export default Work;
