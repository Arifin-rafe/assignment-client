// import React from 'react';

import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className="mt-10 text-center bg-orange-200">
            <h1 className="text-4xl font-serif">Students Universities that collaborate
            <br /> with us before</h1>

            <div className="">
                <Marquee>
                    
                    <img className="h-56 w-56" src="../../../../public/images/sunway.jpg" alt="" />
                    <img className="h-56 w-56" src="../../../../public/images/city.jpg" alt="" />
                    <img className="h-56 w-56" src="../../../../public/images/first.jpg" alt="" />          
                    <img className="h-36 w-56" src="../../../../public/images/ucsi.jpg" alt="" />           
                    <img className="h-56 w-56" src="../../../../public/images/taylor.jpg" alt="" />    
                    <img className="h-56 w-56" src="../../../../public/images/wou.jpg" alt="" />
                    
                    
                </Marquee>
            </div>
        </div>
    );
};

export default Partners;