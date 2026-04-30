import React, { use } from 'react';
import PriceingCard from './PriceingCard';

const PriceingOptions = ({ priceingPromise }) => {
    const priceingData = use(priceingPromise);

    console.log(priceingData)
    return (
        <div className='space-y-6 mb-3'>
            <h2 className='text-5xl text-center'>Get our membership</h2>
            {/* Card container */}
            <div className='grid md:grid-cols-3 gap-6 w-11/12 mx-auto'>
                {
                    priceingData.map(priceing => <PriceingCard key={priceing.id} priceing={priceing}></PriceingCard>)
                }
            </div>
        </div>
    );
};

export default PriceingOptions;