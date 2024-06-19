// pages/index.js
import Head from 'next/head';
import Card from '../components/Card';

export default function ProjectCard() {
  const cards = [
    { title: "Blu-E Shashtav Bharat Offical Website",subheading:"React.js, Tailwind, Node.js, Express, MongoDB", description: "StartUp company website focused on EV charging stations, emphasizing detailed product information and services. The site includes a real-time contact and feedback section, securely storing user data, and integrates email functionality via Node.js and Nodemailer. ", imgSrc: "/pro1.png", githubLink: "https://github.com/Samiksha1404/Blu-e_StartupProject1", learnMoreLink: "https://blu-e-startup-project1.vercel.app/" },
    { title: "Real Time Content Creation",subheading:"Featured Project", description: "A brief description of the component.", imgSrc: "/pro3.png", githubLink: "#", learnMoreLink: "#" },   
    { title: "MiniMedia - Social Media Website",subheading:"React.js, Node.js, Express, JWT, MongoDB", description: "A clone of a popular social media platform as part of a collaborative team effort. Responsibilities included frontend implementation and backend integration for efficient database management. Key features included JWT authentication for secure user access, enabling profile creation, post CRUD operations with liking/disliking, friend management, and real-time chat functionality. ", imgSrc: "/MiniMedia.png", githubLink: "https://github.com/Samiksha1404/MiniMedia", learnMoreLink: "#" },
    { title: "Multiplayer Tic-Tac-Toe" ,subheading:"React.js, Node.js, Express.js, Stream API", description: "Developed a web-based multiplayer Tic-Tac-Toe game featuring a secure login/signup authentication system. Integrated with the Stream API, the app enables players to interact via chat while playing, enhancing the gaming experience.", imgSrc: "/TicTacToe.png", githubLink: "https://github.com/Samiksha1404/Multi-player-tic-tac-toe", learnMoreLink: "#" },
    { title: "RCOEM Blockchain Chapter Website " ,subheading:"React.js, CSS, Figma", description: "Developed a polished frontend for the Blockchain RCOEM Chapter website using React.js and Material UI. The website features information on upcoming events, student registration for events, details about the club, and provides a platform for students to contact us and join the club.", imgSrc: "/pro2.png", githubLink: "https://github.com/Blockchain-RCOEM-Chapter/BRCwebsite", learnMoreLink: "https://blockchainrcoemchapter.co.in/" },
    { title: "MiniJunckbes" ,subheading:"Figma, Adobe illustrator ", description: "Created a comprehensive food ordering app UI using Figma, featuring designs for selecting food items, placing orders with a payment gateway, and tracking orders. This project showcases my skills in UI/UX design for seamless user experiences.", imgSrc: "/pro4.png", githubLink: "#", learnMoreLink: "#" },
    { title: "Expense Tracker" ,subheading:"HTML, CSS, Javascript", description: "Developed a website using HTML, CSS, and JavaScript to help users track expenses and income. The site features functionality to add and delete transactions with descriptions and displays the total balance. ", imgSrc: "/ExpenceTracker.png", githubLink: "https://github.com/Samiksha1404/ExpenseTracker-HTML-CSS", learnMoreLink: "#" },
    { title: "Keeper App" ,subheading:"React.js, CSS, Javascript", description: "Developed a simple to-do app using React.js, CSS, and JavaScript. The app allows users to add and delete notes, helping them keep track of tasks. This project showcases my skills in creating functional and intuitive web applications.", imgSrc: "/KeeperApp.png", githubLink: "https://github.com/Samiksha1404/KeeperApp", learnMoreLink: "#" }
  ];

  return (
    <div className="min-h-screen">
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8">
          {cards.map((card, index) => (
            <Card key={index + 1} {...card} index={index + 1} />
          ))}
        </div>
      </main>
    </div>
  );
}
