import React from 'react';

const AppoinmentOptions = ({option}) => {
    const {name, slots} = option;
    return (
        <div className="card flex items-center text-center shadow-2xl">
        <div className="card-body">
          <h2 className="card-title  text-info">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Appoinment</button>
          </div>
        </div>
      </div>
    );
};

export default AppoinmentOptions;