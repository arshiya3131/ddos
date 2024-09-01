"use client"

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TrafficMonitor = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        console.log('Fetching traffic data from', start, 'to', end);
    };

    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">Traffic Monitor</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Select Date Range</label>
                    <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline
                        className="w-full"
                    />
                </div>
                <div>
                    <p>Traffic data from {startDate.toDateString()} to {endDate ? endDate.toDateString() : 'Select end date'}:</p>
                </div>
            </div>
        </section>
    );
};

export default TrafficMonitor;
