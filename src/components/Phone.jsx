import React from 'react';

const PhoneForm = () => {
    return (
        <div class="bg-cover bg-center flex  justify-center bg-[url(./assets/Landingpage.png)] w-[316px] h-[675px] ">
                <form class="flex flex-col items-center mt-35 space-y-5">
                    <label>Company Name:</label>
                    <div class="">
                        <input type="text" id="companyName" name="companyName" class="bg-white w-[240px] h-[39px] rounded-[100px]" />
                    </div>
                    
                        <label>Company Position:</label>
                    <div class="">
                        <input type="text" id="companyPosition" name="companyPosition" class="bg-white w-[240px] h-[39px] rounded-[100px]" />
                    </div>
                    <button type="submit" class="w-[197px] h-[39px] rounded-[100px] bg-white">Search</button>
                </form>
        </div>
    );
};

export default PhoneForm;