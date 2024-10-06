import React from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/Card';
import Footer from './components/Footer';

import holidayifyImage from './assets/holidayify.webp'; // Adjust the path relative to the component
import nutrientsImage from './assets/nutrients.webp'; // Adjust the path relative to the component
import portfolioImage from './assets/portfolio.webp'; // Adjust the path relative to the component
import blogImage from './assets/blog.webp'; // Adjust the path relative to the component



const images = {
  holidayify: holidayifyImage,
  nutrients: nutrientsImage,
  portfolio: portfolioImage,
  blog: blogImage,
};

function App() {
  const projects = [
    {
      title: 'Holiday-ify',
      description: 'Holiday-ify is a web app that creates personalised holiday playlists based on your Spotify data. Users select preferences like destination, occasion, and music taste. The app uses Spotify data temporarily to curate a custom playlist, offering witty responses throughout the process. Access is not stored, and users can revoke it anytime from their Spotify account settings. You can start mixing a playlist based on your travel vibes and preferences, making it a fun, interactive experience for music lovers.',
      technologies: ['PHP', 'CSS', 'JavaScript', 'SQL', 'Rest-API','GIT', 'Tailwind & DaisyUI'],
      link: 'https://holidayify.aight.fun',
      imageUrl: images.holidayify,
    },
    {
      title: 'Nutrient Calculator',
      description: '"Nutrient Tracker" is a web app that allows users to set nutrition goals based on gender and custom calorie, protein, carb, and fat targets. Users can search for food items, add them to their list, and calculate the nutrients based on serving size. It\'s a tool to help track dietary intake and tailor nutritional needs easily',
      technologies: ['PHP', 'JavaScript', 'SQL', 'CSS', 'Tailwind & DaisyUI', 'GIT'],
      link: 'http://nutrients.aight.fun',
      imageUrl: images.nutrients,
    },
    {
      title: 'Blog Post Generator',
      description: 'This PHP web application takes CSV uploads containing topics and generates detailed blog posts using OpenAI\'s GPT-4. Each blog post is formatted and saved as a Word document. The app is designed to assist content creators by automating the generation of high-quality, structured content.',
      technologies: ['PHP', 'HTML', 'API', 'CSS', 'PICO CSS', 'GIT'],
      link: 'https://github.com/JoeShippo/BlogPostGenerator',
      imageUrl: images.blog,
    },

    {
      title: 'aight.fun',
      description: 'My portfolio... seems rude to not talk about it.',
      technologies: ['React', 'CSS', 'Tailwind & Material Tailwind', 'GIT'],
      link: 'https://aight.fun',
      imageUrl: images.portfolio,
    },
  ];
  

  return (
    <div className="App">
      <Hero />
      <section className="container mx-auto px-4 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
      </section>
      <Footer />
    </div>
  );
}

export default App;
