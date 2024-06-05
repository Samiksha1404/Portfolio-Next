// links
import Link from "next/link";

// icons
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link href={'https://github.com/Samiksha1404'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={'mailto:s4samikshagupta2003@gmail.com'} className="hover:text-accent transition-all duration-300">
        <RiMailLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/samiksha-gupta-99617222b'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
