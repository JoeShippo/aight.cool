import React from 'react';
// import { Button, Typography } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

const AboutSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-stretch ">
            {/* Left Column: Background */}
            <div className="w-full md:w-1/3 tealBG p-8 flex justify-center relative">
                {/* Profile Card Overlap */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm md:translate-x-1/3 z-10">
                    {/* Profile Image */}
                    <div className="w-full h-full">
                        <img 
                            src={require('../assets/me.webp')} 
                            alt="It's Me!" 
                            className="w-full hidden md:block md:h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Right Column: Info and Actions */}
            <div className="w-full h-full md:w-2/3 p-8 flex flex-col items-start md:pl-28 ">
                <Typography variant="h6" className="text-md md:text-md font-bold uppercase">
                    As mentioned
                </Typography>
                <Typography variant="h2" className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                    I'm is Joe
                </Typography>
                {/* Action Buttons */}
                {/* <div className="flex space-x-4 my-6">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">Resume</Button>
                    <Button variant="outlined" color="blue-gray">Projects</Button>
                </div> */}
                {/* Description */}
                <Typography variant="paragraph" color="gray" className="mb-2">
                    I'm a web and software developer with a passion for creating interactive and user-friendly applications.
                    I have experience in various technologies and enjoy building cool stuff.
                </Typography>
                <Typography variant="paragraph" color="gray" className="mb-2">
                    Sometimes if you're lucky, you'll see me on a run, drinking a beer, reading a book, reading Waitrose's Weekend Newspaper or writing some nonsense.
                </Typography>
                {/* <Typography variant="paragraph" color="gray" className="mb-2">
                    Feel free to explore my work, check out my resume, or connect with me through my social channels!
                </Typography> */}
                <div className="flex flex-col md:flex-row ">
                    <div className="w-full md:w-1/2 flex flex-col items-start md:mr-2">
                        <Typography variant="h5" className="font-normal mt-2">
                            Some Things I Know
                        </Typography>

                        <Typography variant="h6" color="gray" className='font-normal mt-2'>
                            Languages
                        </Typography>
                        <Typography variant="paragraph" color="gray">JavaScript, HTML5, CSS3, PHP</Typography>

                        <Typography variant="h6" color="gray" className='font-normal mt-2'>
                            Libraries &amp; Frameworks
                        </Typography>
                        <Typography variant="paragraph" color="gray">jQuery, Bootstrap, Node, React, Tailwind, Pico, SQL, LESS, SASS</Typography>

                        <Typography variant="h6" color="gray" className='font-normal mt-2'>
                            Tools
                        </Typography>
                        <Typography variant="paragraph" color="gray">Rest-API, Git & Github, Command Line, Adobe Photoshop, InDesign</Typography>

                        <Typography variant="h6" color="gray" className='font-normal mt-2'>
                            Projects
                        </Typography>
                        <Typography variant="paragraph" color="gray">Websites, Web Apps, Wordpress, Ecommerce, Email Marketing</Typography>


                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-start md:ml-2">
                        <Typography variant="h5" className="font-normal mt-2">
                            Some Things I Like
                        </Typography>
                        <Typography variant="h6" color="gray" className='font-normal mt-2'>
                            Meet the Ipsums - <a href="https://meettheipsums.com" rel="noreferrer" target='_blank' className='opacity-80 hover:opacity-100 hover:underline'>View</a>
                        </Typography>
                        <Typography variant="paragraph" color="gray">
                            Fun and themed placeholder text generators for creative projects. 
                        </Typography>

                        <Typography variant="h6" color="gray" className='font-normal mt-2'>
                            Can I Email? - <a href="https://www.caniemail.com" rel="noreferrer" target='_blank' className='opacity-80 hover:opacity-100 hover:underline'>View</a>
                        </Typography>
                        <Typography variant="paragraph" color="gray">
                            Check HTML and CSS support across email clients easily. 
                        </Typography>

                        <Typography variant="h6" color="gray" className='font-normal mt-2'>
                            Can I Use? - <a href="https://caniuse.com" rel="noreferrer" target='_blank' className='opacity-80 hover:opacity-100 hover:underline'>View</a>
                        </Typography>
                        <Typography variant="paragraph" color="gray">
                            Browser compatibility tables for HTML, CSS, and JavaScript features. 
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;