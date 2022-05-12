import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import banner2 from '../../assets/images/treatment.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typestting indust ipsum has bee the',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling ',
            description: 'Lorem Ipsum is simply dummy printing and typestting indust ipsum has bee the',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typestting indust ipsum has bee the',
            img: teeth
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary font-bold text-xl'>OUR SERVICES</h2>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2 '>

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>

            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={banner2} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='text-left mx-20'>
                        <h1 class="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;