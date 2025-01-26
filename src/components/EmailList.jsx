import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Email = ({ onHomeClick, searchResults }) => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        if (searchResults) {
            setProfiles(searchResults.results);
        }
    }, [searchResults]);

    return (
        <div className="bg-cover bg-center flex items-top justify-center bg-[url(./assets/Infopage.png)] w-[316px] h-[675px] overflow-auto">
            <div className="w-10 h-4"></div>
            <div className="top container">
                <button className="btn mt-5" onClick={onHomeClick}>
                    <img src="src/assets/Home.png" alt="Home" />
                </button>
                <div className="profiles-list mt-5">
                    {profiles.map((profile, index) => (
                        <div key={index} className="profile-item mb-4 p-2 bg-white rounded shadow">
                            <img src={profile.photo_url} alt={profile.name} className="w-10 h-10 rounded-full" />
                            <div className="profile-info ml-2">
                                <h3 className="text-lg font-semibold">{profile.name}</h3>
                                <p className="text-sm">{profile.position}</p>
                                <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Email;