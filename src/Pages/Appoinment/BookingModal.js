import { format } from 'date-fns';
import React, { useContext } from 'react';
import { json } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name,slots } = treatment;  //treatment is Appoinment option
    const date = format(selectedDate, 'PPPP')
    const {user} = useContext(AuthContext)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const patient = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appoinmentDate: date,
            treatment: name,
            patient,
            email,
            slot,
            phone
        }

        fetch('http://localhost:5000/bookings',{
           method:'POST',
           headers:{
            'content-type': 'application/json'
           },
           body: JSON.stringify(booking) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setTreatment(null)
                toast.success('booking appoinment successfully')
                refetch()    
            }
            else {
                toast.error(data.message)
            }
           
            
        }) 
        
       
    }
    return (
        <>
            <input type="checkbox" id="booking-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg  font-bold">{name}</h3>
                    <form onSubmit={handleBooking} action="">
                        <input type="text" name="Search" disabled value={date} className="w-full my-2 py-2 text-center text-sm border border-gray-400 rounded-md  focus:outline-none text-gray-800 focus::bg-gray-900 focus:border-violet-400" />
                        <select name='slot' className="select w-full">
                            {
                                slots.map((slot,i) => <option key={i} value={slot} >{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" defaultValue={user?.displayName} readOnly placeholder="type your name" className="w-full my-2 py-2 text-center text-sm border border-gray-400 rounded-md  focus:outline-none text-gray-800 focus::bg-gray-900 focus:border-violet-400" />
                        <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="enter your email" className="w-full my-2 py-2 text-center text-sm border border-gray-400 rounded-md  focus:outline-none text-gray-800 focus::bg-gray-900 focus:border-violet-400" />
                        <input type="text" name="phone" placeholder="type your phone number" className="w-full my-2 py-2 text-center text-sm border border-gray-400 rounded-md  focus:outline-none text-gray-800 focus::bg-gray-900 focus:border-violet-400" />
                        <input className='btn  w-full text-white' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;