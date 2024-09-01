"use client"
import { useState } from 'react';

const BlockIPSection = () => {
    const [ipAddress, setIpAddress] = useState('');
    const [blockedIPs, setBlockedIPs] = useState([
        "192.9.0.101",
        "129.4.0.101",
        "192.4.0.101",
        "193.40.101",
    ]);

    const handleInputChange = (e) => {
        setIpAddress(e.target.value);
    };

    const handleBlockIP = (e) => {
        e.preventDefault();

        if (ipAddress && !blockedIPs.includes(ipAddress)) {
            setBlockedIPs([...blockedIPs, ipAddress]);
            setIpAddress('');
        }
    };

    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">Block IP Addresses</h2>
            <form onSubmit={handleBlockIP} className="mb-4">
                <div className="flex items-center">
                    <input
                        type="text"

                        value={ipAddress}
                        onChange={handleInputChange}
                        placeholder="Enter IP address"
                        className="border text-black border-gray-300 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                        type="submit"
                        className="bg-red-500 text-black px-4 py-2 rounded-r hover:bg-red-600 transition-colors duration-300"
                    >
                        Block IP
                    </button>
                </div>
            </form>

            {blockedIPs.length > 0 && (
                <div className="bg-red-100 p-4 rounded-lg shadow-lg">
                    <h3 className="font-bold text-xl text-black mb-2">Blocked IP Addresses</h3>
                    <ul className="list-disc pl-5 text-black">
                        {blockedIPs.map((ip, index) => (
                            <li key={index}>{ip}</li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default BlockIPSection;
