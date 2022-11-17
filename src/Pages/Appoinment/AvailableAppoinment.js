import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AppoinmentOptions from './AppoinmentOptions';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({ selectedDate }) => {
    // const [appoinmentOption, setAppoinmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate,'PPPP')

    const { isLoading,data:appoinmentOption = [],refetch} = useQuery({
        queryKey: ['appoinmentOption',date],
        queryFn: async () => {
            const res = await fetch(`https://doctor-server-beta.vercel.app/appoinmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
       
    })

if(isLoading){
    return <div className='h-80vh flex items-center justify-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
}


    // useEffect(() => {
    //     fetch('https://doctor-server-beta.vercel.app/appoinmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppoinmentOptions(data))
    // }, [])
    return (
        <section>
            <p className='text-info pb-10 text-center font-bold'>Available Date: {format(selectedDate, 'PPPP')}</p>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                appoinmentOption.map(option => <AppoinmentOptions 
                key={option._id}
                option = {option}
                setTreatment = {setTreatment}
                ></AppoinmentOptions>)
            }
            </div>
           {
            treatment && 
            <BookingModal
            selectedDate = {selectedDate}
           treatment = {treatment}
           setTreatment = {setTreatment}
           refetch = {refetch}
           ></BookingModal>
           }
        </section>

    );
};

export default AvailableAppoinment;