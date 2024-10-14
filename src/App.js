import React from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/Card';
import AboutSection from './components/AboutSection';

import Footer from './components/Footer';

import holidayifyImage from './assets/holidayify.webp'; 
import nutrientsImage from './assets/nutrients.webp'; 
import portfolioImage from './assets/portfolio.webp'; 
import blogImage from './assets/blog.webp'; 
import deleterImage from './assets/delete.webp';
import runningPlan from './assets/running-plan.webp'; 
import runningPlaylist from './assets/running-playlist.webp'; 
import tvCharacters from './assets/tv-characters.webp';
import freezer from './assets/freezermate.webp';


const images = {
  holidayify: holidayifyImage,
  nutrients: nutrientsImage,
  portfolio: portfolioImage,
  blog: blogImage,
  deleter: deleterImage,
  runningPlan: runningPlan,
  runningPlaylist: runningPlaylist,
  tvCharacters: tvCharacters,
  freezer: freezer,
};

function App() {
  const projects = [
    {
      title: 'Holiday-ify',
      description: 'Holiday-ify is a web app that creates personalised holiday playlists based on your Spotify data. Users select preferences like destination, occasion, and music taste. The app uses Spotify data temporarily to curate a custom playlist, offering witty responses throughout the process. Access is not stored, and users can revoke it anytime from their Spotify account settings. You can start mixing a playlist based on your travel vibes and preferences, making it a fun, interactive experience for music lovers.',
      technologies: ['PHP', 'CSS', 'JavaScript', 'SQL', 'Rest-API','GIT', 'Tailwind & DaisyUI'],
      link: 'https://holidayify.aight.fun',
      imageUrl: images.holidayify,
      status: 'Under 3rd Party Review',
    },
    {
      title: 'Freezer Mate',
      description: 'FreezerMate is an e-commerce web platform designed to sell products efficiently using a modern tech stack. Built with PHP and SQL for robust server-side functionality and database management, the site ensures smooth user interactions. It features a clean, responsive design thanks to Tailwind CSS and DaisyUI, providing an intuitive and visually appealing interface. The project is managed using NPM and hosted locally during development via MAMP, ensuring a streamlined development workflow. Additionally, Stripe is integrated for secure, reliable payment processing. This project highlights my expertise in full-stack development, combining clean code, effective design, and secure transaction handling.',
      technologies: ['PHP', 'CSS', 'JavaScript', 'SQL', 'MAMP','GIT', 'Tailwind & DaisyUI','Stripe'],
      link: 'https://freezermate.co.uk',
      imageUrl: images.freezer,
      status: 'Live',
    },
    {
      title: 'Nutrient Calculator',
      description: '"Nutrient Tracker" is a web app that allows users to set nutrition goals based on gender and custom calorie, protein, carb, and fat targets. Users can search for food items, add them to their list, and calculate the nutrients based on serving size. It\'s a tool to help track dietary intake and tailor nutritional needs easily',
      technologies: ['PHP', 'JavaScript', 'SQL', 'CSS', 'Tailwind & DaisyUI', 'GIT'],
      link: 'http://nutrients.aight.fun',
      imageUrl: images.nutrients,
      status: 'Version 2 In Development',
    },
    {
      title: 'Blog Post Generator',
      description: 'This PHP web application takes CSV uploads containing topics and generates detailed blog posts using OpenAI\'s GPT-4. Each blog post is formatted and saved as a Word document. The app is designed to assist content creators by automating the generation of high-quality, structured content.',
      technologies: ['PHP', 'HTML', 'API', 'CSS', 'PICO CSS', 'GIT'],
      link: 'https://github.com/JoeShippo/BlogPostGenerator',
      imageUrl: images.blog,
      status: 'GitHub Only',
    },

    {
      title: 'Playlist Deleter',
      description: 'Created to support my playlist generation apps, this tool was born out of necessity, turns out deleting over 300 test playlists is quite time-consuming. The Spotify Playlist Deleter is a streamlined web app that allows users to easily manage and delete their Spotify playlists in bulk. With a simple and intuitive interface, users can authenticate with their Spotify account, view their entire list of playlists, and select multiple playlists to delete with a single click. Designed with a focus on usability and speed, the app is perfect for anyone who needs to clean up their Spotify account without the hassle of manual deletion.',
      technologies: ['PHP', 'HTML', 'CSS', 'Chota CSS', 'JavaScript', 'Spotify Web API', 'cURL (PHP)', 'Git', 'GitHub', 'MAMP'],
      link: 'https://github.com/JoeShippo/PlaylistDeleter',
      imageUrl: images.deleter,
      status: 'GitHub Only',
    },
    {
      title: 'Spotify Running Playlist',
      description: 'This web app generates a customized running playlist based on your running pace. By integrating with Spotify, it selects songs with beats per minute (BPM) that match your stride, ensuring the music keeps you motivated and in rhythm throughout your run.',
      technologies: ['To be confirmed'],
      link: '#',
      imageUrl: images.runningPlaylist,
      status: 'Under 3rd Party Review',
    },
    
    {
      title: 'AI Running Plan Generator',
      description: 'An intuitive web application that creates tailored running plans based on your experience level, goals, and weekly schedule. Using AI, it generates training plans that help you achieve personal running milestones, whether it\'s a 5k or a marathon.',
      technologies: [],
      link: '#',
      imageUrl: images.runningPlan,
      status: 'In Development',
    },
    
    {
      title: 'Spotify Characters Playlists',
      description: 'Inspired by fan-favorite playlists like "Kendall Roy\'s Pre Meeting Hype Playlist," this project generates unique playlists based on top-rated TV and film characters. The app allows users to connect with the personalities and vibes of their favorite characters through handpicked music from Spotify.',
      technologies: ['To be confirmed'],
      link: '#',
      imageUrl: images.tvCharacters,
      status: 'In Development',
    },
    {
      title: 'aight.fun',
      description: 'My portfolio... seems rude to not talk about it.',
      technologies: ['React', 'CSS', 'Tailwind & Material Tailwind', 'GIT'],
      link: 'https://aight.fun',
      imageUrl: images.portfolio,
      status: 'Live',
    },
  ];
  return (
    <div className="App bg-gray-50">
      <Hero />
      <section className="container mx-auto px-4 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
      </section>
      <AboutSection /> {/* New About Section */}
      <Footer />
    </div>
  );
}

export default App;
