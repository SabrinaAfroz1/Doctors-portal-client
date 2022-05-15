import React from 'react';
import qoute from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            address: 'California',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here',
            img: people1

        },
        {
            _id: 2,
            name: 'Goearge Jin',
            address: 'California',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here',
            img: people2

        },
        {
            _id: 3,
            name: 'Jam Boad',
            address: 'Singapore',
            review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here',
            img: people3

        }
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between mt-20'>
                <div className='text-left'>
                    <h4 className="text-2xl text-primary font-bold"> Testimonials</h4>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={qoute} alt="" />
                </div>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }

            </div>
        </section>
    );
};

export default Testimonials;