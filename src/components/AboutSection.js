import React from 'react';
import { Typography } from "@material-tailwind/react";

const thingsIKnow = [
    {
        title: "Languages",
        items: ["JavaScript", "HTML5", "CSS3", "PHP"],
    },
    {
        title: "Libraries & Frameworks",
        items: ["jQuery", "Bootstrap", "Node", "React", "Tailwind", "Pico", "SQL", "LESS", "SASS"],
    },
    {
        title: "Tools",
        items: ["Rest-API", "Git & Github", "Command Line", "Adobe Photoshop", "InDesign"],
    },
    {
        title: "Projects",
        items: ["Websites", "Web Apps", "Wordpress", "Ecommerce", "Email Marketing"],
    },
];

const thingsILike = [
    {
        title: "Meet the Ipsums",
        description: "Fun and themed placeholder text generators for creative projects.",
        link: "https://meettheipsums.com",
    },
    {
        title: "Can I Email?",
        description: "Check HTML and CSS support across email clients easily.",
        link: "https://www.caniemail.com",
    },
    {
        title: "Can I Use?",
        description: "Browser compatibility tables for HTML, CSS, and JavaScript features.",
        link: "https://caniuse.com",
    },
];

const AboutSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-stretch ">
            <div className="w-full md:w-1/3 tealBG p-8 flex justify-center relative">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm md:translate-x-1/3 z-10">
                    <div className="w-full h-full">
                        <img
                            src={require('../assets/me.webp')}
                            alt="It's Me!"
                            className="w-full hidden md:block md:h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-full md:w-2/3 p-8 flex flex-col items-start md:pl-28 ">
                <Typography variant="h6" className="text-md md:text-md font-bold uppercase">
                    As mentioned
                </Typography>
                <Typography variant="h2" className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                    I'm Joe
                </Typography>
                <Typography variant="paragraph" color="gray" className="mb-2">
                    I'm a web and software developer with a passion for creating interactive and user-friendly applications.
                    I have experience in various technologies and enjoy building cool stuff.
                </Typography>
                <Typography variant="paragraph" color="gray" className="mb-2">
                    Sometimes if you're lucky, you'll see me on a run, drinking a beer, reading a book or Waitrose's Weekend Newspaper or writing some nonsense.
                </Typography>
                <div className="flex flex-col md:flex-row">
                    {/* Things I Know */}
                    <div className="w-full md:w-1/2 flex flex-col items-start md:mr-2">
                        <Typography variant="h5" className="font-normal mt-2">
                            Some Things I Know
                        </Typography>
                        {thingsIKnow.map((thing, index) => (
                            <div key={index} className="mt-4">
                                <Typography variant="h6" color="gray" className='font-normal'>
                                    {thing.title}
                                </Typography>
                                <Typography variant="paragraph" color="gray">
                                    {thing.items.join(", ")}
                                </Typography>
                            </div>
                        ))}
                    </div>

                    {/* Things I Like */}
                    <div className="w-full md:w-1/2 flex flex-col items-start md:ml-2">
                        <Typography variant="h5" className="font-normal mt-2">
                            Some Things I Like
                        </Typography>
                        {thingsILike.map((thing, index) => (
                            <div key={index} className="mt-4">
                                <Typography variant="h6" color="gray" className='font-normal'>
                                    {thing.title} - <a href={thing.link} rel="noreferrer" target='_blank' className='opacity-80 hover:opacity-100 hover:underline'>View</a>
                                </Typography>
                                <Typography variant="paragraph" color="gray">
                                    {thing.description}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;