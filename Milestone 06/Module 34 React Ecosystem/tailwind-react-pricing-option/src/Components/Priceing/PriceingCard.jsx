
import React from 'react';
import PriceingFeature from './PriceingFeature';
const PriceingCard = ({ priceing }) => {
    console.log(priceing)

    const { name, price, duration, info, features } = priceing;

    return (
        <div className='bg-slate-500 border rounded-3xl p-3 space-y-3'>
            {/* Card header */}
            <div className='space-y-3'>
                <h1 className='text-5xl'>{name}</h1>
                <h1 className='text-3xl'>${price}/{duration}</h1>
            </div>
            {/* Card body */}
            <div className="space-y-3">
                <p></p>
                <p>{info}</p>
                <ul className='bg-slate-600 p-2 rounded-3xl space-y-2'>
                    {
                        features.map((feature, index) => <PriceingFeature key={index} feature={feature}></PriceingFeature>)
                    }
                </ul>
            </div>
            <button className="btn btn-soft rounded-3xl w-full">Subscribe</button>
        </div>

    );
};
export default PriceingCard;