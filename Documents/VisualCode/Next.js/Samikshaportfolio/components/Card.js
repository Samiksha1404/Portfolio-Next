

import { motion } from 'framer-motion';

const Card = ({ title,subheading, description, imgSrc, githubLink, learnMoreLink, index }) => {
    const isEven = index % 2 === 0;
  
    return (
      <motion.div
        className="group relative w-full"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="relative h-[450px] w-full overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 group-hover:scale-95 ">
          <div className="absolute inset-0 z-10 h-full w-full  opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="relative z-20 grid grid-cols-2 h-full">
            <div className={`relative overflow-hidden ${isEven ? 'order-1' : 'order-2'}`}>
              <img
                src={imgSrc}
                alt="Image"
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                style={{ aspectRatio: '300 / 300', objectFit: 'cover' }}
              />
            </div>
            <div className={`flex flex-col  justify-center gap-4 p-6 ${isEven ? 'order-2' : 'order-1'}`}>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">{title}</h1>
               <h3 className='text-lg text-gray-900'>{subheading}</h3>
              <p className="text-gray-500 dark:text-gray-400">{description}</p>
              <div className="flex items-center mt-2 gap-2">
                <span class=" mr-8 flex items-center justify-center text-2xl md:text-3xl text-opacity-70 bg-primary bg-opacity-10 border border-opacity-20 rounded-full border-primary  cursor-pointer">
                <a
                  href={githubLink}
                  className="inline-flex m-2  gap-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-5 "
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                </span>
                <a
                  className=" hover:bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] inline-flex h-12  items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href={learnMoreLink}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default Card;
  