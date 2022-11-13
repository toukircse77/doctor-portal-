import format from 'date-fns/format';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <section>
            <div className="hero my-10 "
                style={{
                    background: `url(${bg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppoinmentBanner;