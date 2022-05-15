import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
import '../../App.css';

const ContactUs = () => {
    return (
        <div className='mt-12 App' style={
            {
                background: `url(${appointment})`
            }
        }>

            <div className="">
                <h1 className='text-primary font-bold my-7 '>Contact Us</h1>
                <h2 className='font-4xl text-white'>Stay connected with Us</h2>

                <input type="text" placeholder="Email Address" className="input input-bordered input-accent my-3 w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Subject" className="input input-bordered my-3 input-accent w-full max-w-xs" />
                <br />
                <textarea type="textarea" placeholder="Your Message" className="textarea textarea-info input-bordered input-accent my-3 w-full max-w-xs " />
                <br />
                <PrimaryButton>Submit</PrimaryButton>
            </div>

        </div>
    );
};

export default ContactUs;