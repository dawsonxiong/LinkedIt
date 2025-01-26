import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Flask from '../assets/flask.png';
import Figma from '../assets/figma.avif';
import ReactLogo from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Selenium from '../assets/selenium.png';
import Matthew from '../assets/Matthew.jpeg';
import Lily from '../assets/Lily.png';
import Kevin from '../assets/Kevin.png';
import Dawson from '../assets/Dawson.png';
import '../index.css';

function Info() {
    const [hoveredTool, setHoveredTool] = useState(null);
    const [hoveredDeveloper, setHoveredDeveloper] = useState(null);

    const tools = [
        { name: 'Flask', src: Flask },
        { name: 'Figma', src: Figma },
        { name: 'React', src: ReactLogo },
        { name: 'Tailwind', src: Tailwind },
        { name: 'Selenium', src: Selenium }
    ];

    const developers = [
        { name: 'Matthew', src: Matthew },
        { name: 'Lily', src: Lily },
        { name: 'Kevin', src: Kevin },
        { name: 'Dawson', src: Dawson }
    ];

    return (
        <div>
            <div className="w-[631px] h-[662px] flex flex-col items-center justify-center rounded-4xl">
                <div className="top-container w-[631px] h-[230px] rounded-4xl flex items-center space-x-4 pl-4" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
                    <div className="w-[350px] h-[134px] rounded-4xl flex items-center justify-center drop-shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.73)' }}>
                        <img src={Logo} className="w-[123px] h-[123px]"></img>
                        <p className="text-[50px] font-serif">LinkedIt</p>
                    </div>
                    <div>
                        <p className="text">Making</p>
                        <p className="text">Connections</p>
                        <p className="text">Easier</p>
                        <br />
                        <p className="text">One link at a time</p>
                    </div>
                </div>
                <div className="bottom-container w-[631px] h-[460px] flex">
                    <div className="stacked-boxes">
                        <div className="box h-[50%]" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
                            <div className="title" style={{ background: 'rgba(255, 255, 255, 0.73)' }}>
                                <p className="text">What is LinkedIt?</p>
                            </div>
                            <p className="mt-3 text-center text-[19px] px-6">LinkedIt streamlines the processes of finding outreach</p>
                        </div>
                        <div className="box h-[50%]" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
                            <p className="text">Developer Tools</p>
                            <div className="mt-15 flex space-x-2 mt-2">
                                {tools.map(tool => (
                                    <div
                                        key={tool.name}
                                        onMouseEnter={() => setHoveredTool(tool.name)}
                                        onMouseLeave={() => setHoveredTool(null)}
                                        className="relative"
                                    >
                                        <img
                                            src={tool.src}
                                            className={`w-[50px] h-[50px] rounded-full transition-transform duration-200 ${hoveredTool === tool.name ? 'transform scale-125' : ''}`}
                                            alt={tool.name}
                                        />
                                        {hoveredTool === tool.name && (
                                            <div className="absolute top-full mt-2 w-full text-center text-sm bg-white rounded-md shadow-lg">
                                                {tool.name}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="stacked-boxes">
                        <div className="box h-[50%]" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
                            <div className="title" style={{ background: 'rgba(255, 255, 255, 0.73)' }}>
                                <p className="text">Giving back to everyone</p>
                            </div>
                            <p className="mt-3 text-center text-[19px] px-6">We allow outreach from anyone: small business to large companies; sponsors to sponsorships</p>
                        </div>
                        <div className="box h-[50%]" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
                            <p className="text">Developers</p>
                            <div className="mt-15 flex space-x-2 mt-2">
                                {developers.map(developer => (
                                    <div
                                        key={developer.name}
                                        onMouseEnter={() => setHoveredDeveloper(developer.name)}
                                        onMouseLeave={() => setHoveredDeveloper(null)}
                                        className="relative"
                                    >
                                        <img
                                            src={developer.src}
                                            className={`w-[50px] h-[50px] rounded-full transition-transform duration-200 ${hoveredDeveloper === developer.name ? 'transform scale-125' : ''}`}
                                            alt={developer.name}
                                        />
                                        {hoveredDeveloper === developer.name && (
                                            <div className="absolute top-full mt-2 w-full text-center text-sm bg-white rounded-md shadow-lg">
                                                {developer.name}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;