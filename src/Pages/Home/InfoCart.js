import React from 'react';

const InfoCart = ({ cart }) => {
    const {icon,description,title,bgClass} = cart;
    return (
        <div className={`${bgClass} rounded-xl `}>
            <div className="card md:card-side shadow-xl p-3">
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCart;