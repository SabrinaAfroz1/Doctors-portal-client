import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppoinment = () => {
    return (
        <section style={
            {
                background: `url(${appointment})`
            }
        }
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />

            </div>
            <div className='flex-1 text-left mx-20'>
                <h3 className='text-secondary font-bold text-xl'>Appoinment</h3>
                <h1 className='text-4xl text-white mb-10'>Make an appointment Today</h1>
                <p className='text-white mb-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                <PrimaryButton>GET STARTED</PrimaryButton>

            </div>
        </section>
    );
};

export default MakeAppoinment;