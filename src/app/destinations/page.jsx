import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationsPage = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
    const destinations = await res.json();

    return (
        <div className='max-w-6xl mx-auto my-15'>
            <h1 className='text-4xl my-10 font-bold '>Destinations</h1>
            <div className='grid grid-cols-3 gap-10 '>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination ={destination}></DestinationCard>)
                }
            </div>

        </div>
    );
};

export default DestinationsPage;