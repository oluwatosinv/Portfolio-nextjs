import React from 'react'
import Form from './Form'
import Header from './Header'
import Nav from './Nav'
import Projects from './Projects'
import Stack from './Stack'

const HomePage = () => {
    return (
        <div>
            <div className="header-top">
                <Nav />
                <Header />

            </div>
            <Projects />
            {/* <Stack /> */}
            <Form />

        </div>
    )
}

export default HomePage
