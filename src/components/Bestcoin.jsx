import React from 'react'
import Highlighted from './Highlighted';
import Newcoins from './Newcoins';
import Presalelive from './Presalelive';
// import backgroundBody from '../assets/img/backgroundBody.webp';
import BlockDAG from './BlockDAG';
import Airdrops from './Airdrops';
import Blogs from './Blogs';
import Promoted from './Promoted';

const Bestcoin = () => {
    return (
        <div className="w-full">
            <div className='max-w-full h-full mx-[88px] bg-[#1e2635] pb-4'>
                <div className='grid grid-cols-[370px_322px_322px] grid-rows-[282px_282px] gap-4 mx-4 text-white text-center'>
                    <Highlighted />
                    <Newcoins />
                    <Presalelive />
                    <BlockDAG />
                    <Airdrops />
                    <Blogs />
                </div >
                <Promoted />
            </div>
        </div >
    )
}

export default Bestcoin