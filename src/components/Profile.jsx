import React from 'react';
import Logo from '../assets/logo.png'
import '../index.css'

function Profile() {
    return(


  <div className="border-2 border-red-500 w-[448px] h-[665px] flex items-center justify-center rounded-4xl">
    <div className="w-[400px] h-[600px] rounded-4xl bg-white drop-shadow-lg">
      
      <div className="bg-white w-full h-[50px] flex items-center justify-start rounded-t-4xl px-4">
        <p className="text-[18px] font-serif font-medium">Profile</p>
      </div>

      <div className="p-6 flex flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full flex items-center justify-center">   
          </div>
          <div>
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-sm text-gray-600">Manager @ SunLife</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">johndoe@email.com</p>
        </div>
      </div>
    </div>
  </div>



    )
}
export default Profile;