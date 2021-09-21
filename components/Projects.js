import React from 'react'
import Project from './Project'

const Projects = () => {


    return (
        <div className='px-6 py-4 '>
            <h1 className='text-center text-3xl py-3 font-shippori-mincho font-medium'>Recent Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 justify-items-center'>
                <Project
                    link='https://www.detrixstudios.com/'
                    src='https://res.cloudinary.com/tosin/image/upload/v1630429283/HNG/screencapture-detrixstudios-2021-08-20-21_08_20.png'
                    title="Detrix Studios"
                    subTitle='Frontend / HTML / CSS / React js'
                    body='Designed and built a high performance website for a photography and videography Business'
                />
                <Project
                    link='https://weatherapp80.netlify.app/'
                    src='https://res.cloudinary.com/tosin/image/upload/v1629489882/HNG/screencapture-weatherapp80-netlify-app-2021-07-05-11_06_13.png'
                    title="Weather App"
                    subTitle='Frontend / HTML / CSS / React js'
                    body='Designed and built a high performance website to check the weather for any city in the world. You would love it!!!'
                />
                <Project
                    link='https://farmproduceng.netlify.app/'
                    src='https://res.cloudinary.com/tosin/image/upload/v1632261002/screencapture-farmproduceng-netlify-app-2021-09-21-22_42_13_bebh2t.png'
                    title='Flyo Document'
                    subTitle='Frontend / HTML / CSS'
                    body='Designed and built a high performance website for Farm produce ng'
                />
                <Project
                    link='https://flyodocument.netlify.app/'
                    src='https://res.cloudinary.com/tosin/image/upload/v1629489735/HNG/screencapture-flyodocument-netlify-app-2021-08-17-21_02_29.png'
                    title='Flyo Document'
                    subTitle='Frontend / HTML / CSS'
                    body='Designed and built a high performance website for flyo document'
                />
            </div>
        </div>
    )
}

export default Projects
