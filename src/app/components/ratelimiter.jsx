"use client"
import { useState } from 'react';

const RateLimitSection = () => {
    const [requestsPerMinute, setRequestsPerMinute] = useState(60);
    const [requestsPerHour, setRequestsPerHour] = useState(1000);
    const [requestsPerDay, setRequestsPerDay] = useState(20000);

    const handleSave = (e) => {
        e.preventDefault();
        // You can send this data to your backend or process it as needed
        console.log({
            requestsPerMinute,
            requestsPerHour,
            requestsPerDay,
        });
    };

    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">Request Rate Limitation</h2>
            <form onSubmit={handleSave} className="bg-green-100 p-6 rounded-lg shadow-lg text-black">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="requestsPerMinute">
                        Requests Per Minute
                    </label>
                    <input
                        type="number"
                        id="requestsPerMinute"
                        value={requestsPerMinute}
                        onChange={(e) => setRequestsPerMinute(e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="requestsPerHour">
                        Requests Per Hour
                    </label>
                    <input
                        type="number"
                        id="requestsPerHour"
                        value={requestsPerHour}
                        onChange={(e) => setRequestsPerHour(e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="requestsPerDay">
                        Requests Per Day
                    </label>
                    <input
                        type="number"
                        id="requestsPerDay"
                        value={requestsPerDay}
                        onChange={(e) => setRequestsPerDay(e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                    Save Settings
                </button>
            </form>
        </section>
    );
};

export default RateLimitSection;
