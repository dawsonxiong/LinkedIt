import React from 'react';

const Email = ({ onHomeClick }) => {
    return (
        <div className="bg-cover bg-center flex items-top justify-center bg-[url(./assets/Infopage.png)] w-[316px] h-[675px] overflow-auto">
            <div className="w-10 h-4"></div>
            <div className="top container">
                <button className="btn mt-5" onClick={onHomeClick}>
                    <img src="src/assets/Home.png" alt="Home" />
                </button>
            </div>
        </div>
    );
};

export default Email;