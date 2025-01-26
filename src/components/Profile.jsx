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
        <div className="w-[448px] h-[655px] rounded-4xl flex-direction: column items-center space-x-4 pl-4" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
            <div className="w-30 h-3"></div>
            <div className="w-[256px] h-[39px] rounded-full bg-white drop-shadow-lg">
                <div className="bg-white w-full h-[50px] flex items-center justify-start rounded-full px-4">
                    <p className="text-[18px] font-serif font-medium">Profile</p>
                </div>
            </div>

            <div className="w-30 h-15"></div>

            {profile ? (
                <div className="profile-item mb-4 p-2 bg-white rounded shadow">
                    <img src={profile.photo_url} alt={profile.name} className="w-10 h-10 rounded-full" />
                    <div className="profile-info ml-2">
                        <h3 className="text-lg font-semibold">{profile.name}</h3>
                        <p className="text-sm">{profile.position}</p>
                        <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            View Profile
                        </a>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Profile;