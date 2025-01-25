import React from 'react';

const PhoneForm = () => {
    return (
        <div className="flex items-center justify-center w-[314px] h-[675px] border-3 border-black rounded-[50px]">
            <div className="flex justify-center w-[292px] h-[655px] bg-[#FF9C67] opacity-50 rounded-[50px]">
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
        </div>
    );
};

export default PhoneForm;