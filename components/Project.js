import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Project = (props) => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div

            data-aos="zoom-in"
            className='shadow max-w-sm  border rounded'>
            <a href={props.link} target="_blank">
                <img src={props.src} />
                <div className='px-4 py-2 font-Chivo'>
                    <h3 className='text-center text-2xl'>{props.title}</h3>
                    <p className='text-green-500'>{props.subTitle}</p>
                    <p>{props.body}</p>
                </div>
            </a>
        </div>
    )
}

export default Project
