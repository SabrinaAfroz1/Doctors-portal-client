import React from 'react';
import image1 from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen  ">
                <div style={
                    {
                        background: `url(${image1})`,




                    }
                } className="hero-content flex-col lg:flex-row-reverse bg-opacity:20">
                    <img src={image1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='text-left mx-20 '>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;