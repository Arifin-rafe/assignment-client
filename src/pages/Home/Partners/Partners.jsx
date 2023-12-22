// import React from 'react';

import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className="mt-10 text-center ">
            <h1 className="text-4xl font-serif">Students Universities that collaborate
            <br /> with us before</h1>

            <div className="">
                <Marquee>
                    
                    <img className="h-56 w-56 mr-10" src="./images/sunway.jpg" alt="" />
                    <img className="h-56 w-56 mr-10" src="./images/city.jpg" alt="" />
                    <img className="h-56 w-56 mr-10" src="./images/first.jpg" alt="" />          
                    <img className="h-36 w-56 mr-10" src="./images/ucsi.jpg" alt="" />           
                    <img className="h-56 w-56 mr-10" src="./images/taylor.jpg" alt="" />    
                    <img className="h-56 w-56 mr-10" src="./images/wou.jpg" alt="" />
                    
                    
                </Marquee>
            </div>
        </div>
    );
};

export default Partners;