import React, { useState } from 'react';
import axios from 'axios';

const PhoneForm = ({ onSearch }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyPosition, setCompanyPosition] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (companyName.trim() === '' || companyPosition.trim() === '') {
      setError('Both fields are required.');
      return;
    }
    setError('');
    
    const data = {
      job: companyPosition,
      company: companyName
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/LinkedIt-search', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      onSearch(response.data);
    } catch (error) {
      setError('Error submitting data');
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="bg-cover bg-center flex justify-center bg-[url(./assets/Landingpage.png)] w-[316px] h-[675px]">
      <form className="flex flex-col items-center mt-30 space-y-5" onSubmit={handleSearch}>
        <label className="font-serif font-bold text-[22px]">Company Name:</label>
        <div>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="bg-white w-[240px] h-[39px] rounded-[100px] font-serif pl-2 text-center"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <label className="font-serif font-bold text-[22px] mt-3">Company Position:</label>
        <div>
          <input
            type="text"
            id="companyPosition"
            name="companyPosition"
            className="bg-white w-[240px] h-[39px] rounded-[100px] font-serif pl-2 text-center"
            value={companyPosition}
            onChange={(e) => setCompanyPosition(e.target.value)}
          />
        </div>
        <button type="submit" className="font-serif text-[22px] font-bold w-[197px] h-[55px] rounded-[100px] bg-white hover:bg-gray-200 transition duration-300 mt-6 border border-black-400">
          Search
        </button>
        {error && (
          <div className="font-serif bg-red-500 text-white p-2 rounded-[100px] mt-2">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default PhoneForm;