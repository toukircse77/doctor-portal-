import React from 'react';
import appoinment from "../../assets/images/appointment.png"
import doctor from '../../assets/images/doctor.png'

const Appoinment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appoinment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" -mt-36 md:block hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-info">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appoinment;