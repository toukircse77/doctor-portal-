import React from 'react';

const AppoinmentOptions = ({option,setTreatment}) => {
    const {name, slots} = option;
    return (
        <div className="card flex items-center text-center shadow-2xl">
        <div className="card-body">
          <h2 className="card-title  text-info">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
          <div className="card-actions justify-end">
            <label 
            disabled = {slots.length === 0}
            onClick={()=> setTreatment(option)} 
            htmlFor="booking-modal-3" className="btn btn-primary">
              Book Appoinment</label>
          </div>
        </div>
      </div>
    );
};

export default AppoinmentOptions;