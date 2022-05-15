import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-left'>{review.review}</h2>

                    <div className="flex items-center ">


                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={review.img} />
                            </div>
                        </div>

                        <div className='mx-10 '>
                            <h2 className='font-bold text-xl'>{review.name}</h2>
                            <h2>{review.address}</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;