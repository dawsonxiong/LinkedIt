import React from 'react';
import Logo from '../assets/logo.png'
import '../index.css'

function Info() {
    return(
        <div>
            <div className="border-2 border-red-500 w-[631px] h-[662px] flex items-center justify-center rounded-4xl">
                <div className="w-[631px] h-[230px] rounded-4xl flex items-center space-x-4 pl-4" style={{ background: 'rgba(255, 255, 255, 0.54)' }}>
                    <div className="bg-white w-[350px] h-[134px] rounded-4xl flex items-center justify-center drop-shadow-2xl">
                        <img src={Logo} className="w-[123px] h-[123px]"></img>
                        <p className="text-[50px] font-serif">LinkedIt</p>
                    </div>
                    <div>
                        <p className="slogan">Making</p>
                        <p className="slogan">Connections</p>
                        <p className="slogan">Easier</p>
                        <br/>
                        <p className="slogan">One link at a time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info;