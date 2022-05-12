import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg'


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 '>
            <InfoCart cardTitle="Opening Hours" cardBody="9am to 6pm" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCart>

            <InfoCart cardTitle="Our Location" bgClass="bg-accent" cardBody="OR Nizam Road, Chittagong" img={location}></InfoCart>

            <InfoCart cardTitle="Contact us" bgClass="bg-gradient-to-r from-secondary to-primary" cardBody="+01912312341" img={phone}></InfoCart>

        </div>
    );
};

export default Info;