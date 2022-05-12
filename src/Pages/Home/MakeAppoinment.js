import React from 'react';
import doctor from '../../assets/images/doctor.png'

const MakeAppoinment = () => {
    return (
        <section>
            <div>
                <img src={doctor} alt="" />

            </div>
            <div>
                <h3>Appoinment</h3>
                <h1>Make an appointment Today</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button>GET STARTED</button>

            </div>
        </section>
    );
};

export default MakeAppoinment;