import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;

    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP')


    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        console.log(slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phoneNumber.value,

        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    toast(`Appointment is set , ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`You already have an Appointment is set on ${data.booking?.date} at ${slot}`)
                }
                refetch();
                //to close the model
                setTreatment(null);
            });



    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">   <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg"> {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }

                        </select>


                        <input type="text" name="name" value={user?.displayName || ''} disabled placeholder="Full Name" className="input input-bordered w-full max-w-xs" />

                        <input type="text" placeholder=" Phone Number" name='phoneNumber' id='phoneNumber' className="input input-bordered w-full max-w-xs" />

                        <input type="email" value={user?.email || ''} disabled name='email' placeholder=" Email " className="input input-bordered w-full max-w-xs" />



                        <input htmlFor="booking-modal" type="submit" value="Submit" className="btn btn-neutral w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;