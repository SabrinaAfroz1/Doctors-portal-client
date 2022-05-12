import React from 'react';


const InfoCart = ({ img, cardTitle, bgClass, cardBody }) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure className='pl-5'><img src={img} alt="Album" /></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>{cardBody}</p>

                </div>
            </div>

        </div>
    );
};

export default InfoCart;