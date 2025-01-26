import React from 'react';
import Logo from '../assets/logo.png'
import '../index.css'

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function Profile({ profile }) {
    return (
        <div className="w-[448px] h-[655px] rounded-4xl flex flex-col items-center" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
            <div className="w-[300px] h-[50px] rounded-full bg-white drop-shadow-lg flex items-center justify-center mt-4">
                <p className="text-[18px] font-serif font-bold">Profile</p>
            </div>

            <div className="w-30 h-15"></div>

            {profile ? (
                <div className="profile-item mb-4 p-2 w-100 bg-white rounded shadow flex flex-col items-center rounded-[30px]">
                    <img src={profile.photo_url} alt={profile.name} className="w-40 h-40 rounded-full mb-4" />
                    <div className="profile-info text-center mb-4">
                        <h3 className="text-lg font-semibold mb-2">{profile.name}</h3>
                        <p className="text-sm mb-4">{profile.position}</p>
                        <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-white bg-[#FF9C67] px-4 py-2 rounded-full mt-2 hover:bg-[#FF7A3C] transition duration-300">
                            View Profile
                        </a>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Profile;