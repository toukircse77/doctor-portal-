import React from 'react';

const ServiceCard = ({service}) => {
    const {name,describtion,icon} = service
    console.log(service)
    return (
        <div className="card w-full bg-base-100 shadow-xl">
  <figure className="pt-10">
    <img src={icon} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{describtion}</p>
  </div>
</div>
    );
};

export default ServiceCard;