import React from 'react';


const InfoCart = ({ img, cardTitle, bgClass, cardBody }) => {
    return (
        <div>
            <div className={`card pt-5  lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure className='pl-5 '><img src={img} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p >{cardBody}</p>

                </div>
            </div>

        </div>
    );
};

export default InfoCart;