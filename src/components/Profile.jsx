import React from 'react';
import Logo from '../assets/logo.png';
import Default from '../assets/default.png';
import '../index.css';

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function Profile({ profile }) {
    const defaultPhoto = 'src/assets/default.png'; // Default photo URL

    return (
        <div className="w-[448px] h-[655px] rounded-4xl flex flex-col items-center" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
            <div className="w-[320px] h-[60px] rounded-full bg-white drop-shadow-lg flex items-center justify-center mt-8">
                <p className="text-[22px] font-serif font-bold">Profile</p>
            </div>

            <div className="w-30 h-12"></div>

            {profile ? (
                <div className="profile-item mb-4 p-2 w-100 bg-white rounded shadow flex flex-col items-center rounded-[30px]">
                    <img src={profile.photo_url || defaultPhoto} className="w-40 h-40 rounded-full mb-4" />
                    <div className="profile-info text-center mb-4">
                        <h3 className="text-lg font-semibold mb-2 text-[20px]">{profile.name}</h3>
                        <p className="text-sm mb-4 text-[16px]">{profile.position}</p>
                        <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-white bg-[#FF9C67] px-4 py-2 rounded-full hover:bg-[#FF7A3C] transition duration-300 text-[18px]">
                            View Profile
                        </a>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Profile;