import React from 'react';

const TestimonialCard = ({card}) => {
    const {name,describtion,city,image} = card;
    return (
        <div className="p-6 sm:p-12 rounded-2xl shadow-2xl">
            <div className='mb-5'>
                <p>{describtion}</p>
            </div>
	<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
		<img src={image} alt="" className="self-center flex-shrink-0 w-24 h-24 border-2 border-cyan-400 rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
		<div className="flex items-center justify-center flex-col">
			<h4 className="text-lg font-semibold text-center md:text-left">{name}</h4>
			<p className="dark:text-gray-400">{city}</p>
		</div>
	</div>
</div>
    );
};

export default TestimonialCard;