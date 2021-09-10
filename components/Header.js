import React from 'react';
import LottieAnimation from "./Lottie";
import code from '../public/Animations/TOSIN ART3.json'

const Header = () => {
    return (
        <section className='header 2xl:py-16 2xl:px-36 py-1 px-16 grid grid-cols-1 md:grid-cols-2'>
            <div className='head'>
                <h1 className='heading-title font-medium text-white text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl font-shippori-mincho'>Hey, I'm Oluwatosin,</h1>
                <p className='heading-text 2xl:text-7xl 2xl:py-20 2xl:pt-36 text-1xl md:text-2xl lg:text-4xl font-white font-Chivo font-light text-white py-4'>A Front-End Developer, who focuses on building web apps with great user experience</p>
                <a href='#'><button className="animate-bounce transition duration-1000 bg-pink-200 text-wheat font-Poppins px-8 py-4 rounded-full rounded-tl-3xl uppercase mt-8 hover:bg-gray-500 shadow-lg">Download CV</button></a>
            </div>
            <div>
                <LottieAnimation lotti={code} />
            </div>
        </section>
    )
}

export default Header
