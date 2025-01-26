import React, { useState } from 'react';

const PhoneForm = ({ onSearch }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyPosition, setCompanyPosition] = useState('');
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (companyName.trim() === '' || companyPosition.trim() === '') {
      setError('Both fields are required.');
      return;
    }
    setError('');
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
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <label className="font-serif">Company Position:</label>
        <div>
          <input
            type="text"
            id="companyPosition"
            name="companyPosition"
            className="bg-white w-[240px] h-[39px] rounded-[100px] font-serif pl-2"
            value={companyPosition}
            onChange={(e) => setCompanyPosition(e.target.value)}
          />
        </div>
        <button type="submit" className="font-serif w-[197px] h-[39px] rounded-[100px] bg-white hover:bg-gray-200 transition duration-300">
          Search
        </button>
        {error && (
          <div className="font-serif bg-red-500 text-white p-4 rounded-[100px] mt-2">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default PhoneForm;