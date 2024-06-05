// pages/index.js
import Head from 'next/head';
import Card from '../components/Card';

export default function ProjectCard() {
  const cards = [
    { title: "Blu-E Shashtav Bharat Offical Website",subheading:"Featured Project", description: "MultiDevLocator is a location tracking system that displays real-time device positions on a map. Device locations are acquired through connected hardware. The system supports multiple devices, offering versatile tracking capabilities. Hardware implementation is currently under consideration.", imgSrc: "/pro1.png", githubLink: "https://github.com/Samiksha1404/Blu-e_StartupProject1", learnMoreLink: "https://blu-e-startup-project1.vercel.app/" },
    { title: "Real Time Content Creation",subheading:"Featured Project", description: "A brief description of the component.", imgSrc: "/pro3.png", githubLink: "#", learnMoreLink: "#" },   
    { title: "MiniMedia - Social Media Website",subheading:"Featured Project", description: "A brief description of the component.", imgSrc: "/MiniMedia.png", githubLink: "https://github.com/Samiksha1404/MiniMedia", learnMoreLink: "#" },
    { title: "Multiplayer Tic-Tac-Toe" ,subheading:"Featured Project", description: "A brief description of the component.", imgSrc: "/TicTacToe.png", githubLink: "https://github.com/Samiksha1404/Multi-player-tic-tac-toe", learnMoreLink: "#" },
    { title: "RCOEM Blockchain Chapter Website " ,subheading:"Featured Project", description: "A brief description of the component.", imgSrc: "/pro2.png", githubLink: "https://github.com/Blockchain-RCOEM-Chapter/BRCwebsite", learnMoreLink: "https://blockchainrcoemchapter.co.in/" },
    { title: "MiniJunckbes" ,subheading:"Featured Project", description: "A brief description of the component.", imgSrc: "/pro4.png", githubLink: "#", learnMoreLink: "#" },
    { title: "Expense Tracker" ,subheading:"Featured Project", description: "A brief description of the component.", imgSrc: "/ExpenceTracker.png", githubLink: "https://github.com/Samiksha1404/ExpenseTracker-HTML-CSS", learnMoreLink: "#" },
    { title: "Keeper App" ,subheading:"Featured Project", description: "A brief description of the component.", imgSrc: "/KeeperApp.png", githubLink: "https://github.com/Samiksha1404/KeeperApp", learnMoreLink: "#" }
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
