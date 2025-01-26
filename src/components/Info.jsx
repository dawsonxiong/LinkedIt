import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Flask from '../assets/flask.png';
import Figma from '../assets/figma.avif';
import ReactLogo from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Selenium from '../assets/selenium.png';
import '../index.css';

function Info() {
    const [hoveredTool, setHoveredTool] = useState(null);

    const tools = [
        { name: 'Flask', src: Flask },
        { name: 'Figma', src: Figma },
        { name: 'React', src: ReactLogo },
        { name: 'Tailwind', src: Tailwind },
        { name: 'Selenium', src: Selenium }
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
                            <p className=" text px-6">LinkedIt streamlines the processes of finding outreach - whether it be sponsors or finding a hackathon to be a part of</p>
                        </div>
                        <div className="box h-[50%]" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
                            <p className="text">Developer Tools</p>
                            <div className="flex space-x-2 mt-2">
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
                            <p className=" text px-6">We allow outreach from anyone: small business to large companies; sponsors to sponsorships</p>
                        </div>
                        <div className="box h-[50%]" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
                            <p className="text">Developers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;