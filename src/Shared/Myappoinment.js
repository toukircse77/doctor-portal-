import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Myappoinment = () => {
 const {user} = useContext(AuthContext);
 
 const {data: bookings = []} = useQuery({
    queryKey:['bookings', user?.email],
    queryFn: async ()=>{
        const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
          headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;
    }
 })


    return (
        <section>
            <h3 className="text-3xl">My Appoinment</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map((booking,i) => <tr className="hover">
        <th>{i+1}</th>    
        <td>{booking.patient}</td>
        <td>{booking.treatment}</td>
        <td>{booking.appoinmentDate}</td>
        <td>{booking.slot}</td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </section>
    );
};

export default Myappoinment;