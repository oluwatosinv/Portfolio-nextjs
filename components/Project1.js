import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Project1 = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);


    return (
        <div className='px-6 py-4 ' >
            <h1 className='text-center text-3xl py-3 font-shippori-mincho font-medium'>Recent Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 justify-items-center'>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='shadow max-w-sm  border rounded'>
                    <a href='https://www.detrixstudios.com/' target="_blank">
                        <img src='https://res.cloudinary.com/tosin/image/upload/v1630429283/HNG/screencapture-detrixstudios-2021-08-20-21_08_20.png' />
                        <div className='px-4 py-2 font-Chivo'>
                            <h3 className='text-center text-2xl'>Detrix Studios</h3>
                            <p className='text-green-500'>Frontend / HTML / CSS / React js</p>
                            <p>Designed and built a high performance website for a photography and videography Business</p>
                        </div>
                    </a>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className='shadow max-w-sm border rounded'>
                    <a href='https://www.detrixstudios.com/' target="_blank">
                        <img src='https://res.cloudinary.com/tosin/image/upload/v1629489882/HNG/screencapture-weatherapp80-netlify-app-2021-07-05-11_06_13.png' />
                        <div className='px-4 py-2 font-Chivo'>
                            <h3 className='text-center text-2xl'>Detrix Studios</h3>
                            <p className='text-green-500'>Frontend / HTML / CSS / React js</p>
                            <p>Designed and built a high performance website for a photography and videography Business</p>
                        </div>
                    </a>
                </div>
                <div data-aos="fade-left"
                    data-aos-easing="ease-in-sine"

                    data-aos-offset="300" className='shadow max-w-sm border rounded'>
                    <a href='https://www.detrixstudios.com/' target="_blank">
                        <img src='https://res.cloudinary.com/tosin/image/upload/v1629489735/HNG/screencapture-flyodocument-netlify-app-2021-08-17-21_02_29.png' />
                        <div className='px-4 py-2 font-Chivo'>
                            <h3 className='text-center text-2xl'>Detrix Studios</h3>
                            <p className='text-green-500'>Frontend / HTML / CSS / React js</p>
                            <p>Designed and built a high performance website for a photography and videography Business</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project1
