import React from 'react';

const PhoneForm = () => {
    return (
        <div className="bg-cover bg-center flex items-center justify-center bg-[url(./assets/Landingpage.png)] w-[316px] h-[675px] ">
                <form className="flex flex-col items-center space-y-4">
                    <div className="w-[240px] h-[39px] mb-2.5">
                        <label htmlFor="companyName" className="mb-2.5">Company Name:</label>
                        <input type="text" id="companyName" name="companyName" className="bg-white w-full rounded" />
                    </div>
                    <div className="w-[240px] h-[39px]">
                        <label htmlFor="companyPosition">Company Position:</label>
                        <input type="text" id="companyPosition" name="companyPosition" className="bg-white w-full rounded" />
                    </div>
                    <button type="submit" className="w-[197px] h-[39px] rounded-[100px] bg-white">Search</button>
                </form>
        </div>
    );
};

export default PhoneForm;