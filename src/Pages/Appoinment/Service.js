import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-xl font-bold text-secondary text-3xl">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ?
                                <span>{slots[0]}</span>
                                :
                                <span className='text-red-500'>No slot available .</span>
                        }
                    </p>
                    <p> {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available </p>
                    <div class="card-actions justify-center">


                        <label onClick={() => setTreatment(service)}
                            disabled={slots.length == 0} for="booking-modal"
                            class="btn btn-sm bg-gradient-to-r from-secondary to-primary text-white modal-button">Book Appointment</label>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Service;