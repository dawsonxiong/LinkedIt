import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Email = ({ onHomeClick, searchResults, onProfileSelect }) => {
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
                        <button key={index} className="profile-item mb-4 p-2 bg-white rounded shadow" onClick={() => onProfileSelect(profile)}>
                            <div className="profile-info ml-2">
                                <h3 className="text-lg font-semibold">{profile.name}</h3>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Email;