import React from 'react';
import Logo from '../assets/logo.png'
import '../index.css'

var name = "John Doe"
var position = "Manager @ SunLife"
var email = "johndoe@email.com"

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function Profile() {
    return(
        <div className="w-[448px] h-[655px] rounded-4xl flex-direction: column items-center space-x-4 pl-4" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
            <div className="w-30 h-3"></div>
            <div className="w-[256px] h-[39px] rounded-full bg-white drop-shadow-lg">
                <div className="bg-white w-full h-[50px] flex items-center justify-start rounded-full px-4">
                    <p className="text-[18px] font-serif font-medium">Profile</p>
                </div>
            </div>

            <div className="w-30 h-15"></div>

            <div className="w-[366px] h-[204px] rounded-4xl bg-white drop-shadow-lg">
                <div className="p-6 flex flex-col space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-[50px] h-[50px] bg-gray-300 rounded-full flex items-center justify-center">   
                        </div>
                        <div>
                            <p className="text-lg font-semibold">{name}</p>
                            <p className="text-sm text-gray-600">{position}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="text-sm text-gray-500">{email}</p>
                        <button 
                            className="text-sm text-white bg-[#FF9C67] hover:bg-[#FF7125] rounded-full px-3 py-1 transition duration-300" 
                            onClick={() => copyToClipboard(email)}
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;