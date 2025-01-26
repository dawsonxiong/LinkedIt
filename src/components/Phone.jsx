import React from 'react';

const PhoneForm = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="bg-cover bg-center flex justify-center bg-[url(./assets/Landingpage.png)] w-[316px] h-[675px]">
      <form className="flex flex-col items-center mt-35 space-y-5" onSubmit={handleSearch}>
        <label className="font-serif">Company Name:</label>
        <div>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="bg-white w-[240px] h-[39px] rounded-[100px] font-serif pl-2"
          />
        </div>
        <label className="font-serif">Company Position:</label>
        <div>
          <input
            type="text"
            id="companyPosition"
            name="companyPosition"
            className="bg-white w-[240px] h-[39px] rounded-[100px] font-serif pl-2"
          />
        </div>
        <button type="submit" className="font-serif w-[197px] h-[39px] rounded-[100px] bg-white hover:bg-gray-200 transition duration-300">
          Search
        </button>
      </form>
    </div>
  );
};

export default PhoneForm;