import React from 'react';
import Navbar from '../components/Navbar';
import Service from '../components/Services';
import Ban from "../components/Bannr"
import Section from '../components/Section';
import Technologies from '../components/Technologies';



const Landing = () => {

    return (
        <>

                <div className='body-container'>
                    
            <div className='main-container'>
                    <Navbar />
                    </div>
                    <Ban />
                </div>
                <Service />
                <Section />
                <Technologies/>


         



        </>)



}

export default Landing;