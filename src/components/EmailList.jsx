import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Email = ({ onHomeClick, searchResults, onProfileSelect }) => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        if (searchResults) {
            setProfiles(searchResults.results);
        }
    }, [searchResults]);

    const handleHomeClick = () => {
        setProfiles([]); // Clear profiles
        onHomeClick();
    };

    return (
        <div className="bg-cover bg-center flex items-top justify-center bg-[url(./assets/Infopage.png)] w-[316px] h-[675px] container flex-col">
            <button className="btn mt-2 ml-5" style={{ marginTop: 'calc(2rem - 70px)', marginLeft: 'calc(1.25rem + 15px)' }} onClick={handleHomeClick}>
                <img src="src/assets/Home.png" alt="Home" />
            </button>
            <div className="flex items-top justify-center h-[560px] mt-2 overflow-auto">
                <div className="w-10 h-4"></div>
                
                <div className="top container flex flex-col items-center">
                    
                    <div className="profiles-list mt-5 flex flex-col items-center w-full px-4 mr-10">
                        {profiles.map((profile, index) => (
                            <button
                                key={index}
                                className="profile-item mb-4 p-2 bg-white rounded-full shadow w-full max-w-xs hover:bg-gray-200 transition duration-300"
                                onClick={() => onProfileSelect(profile)}
                            >
                                <div className="profile-info text-center">
                                    <h3 className="text-lg font-serif">{profile.name}</h3>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Email;