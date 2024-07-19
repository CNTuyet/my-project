import React from 'react'
import bgMoon from '../assets/img/moon.jpg';

const BlockDAG = () => {
    const progress = 20;
    return (
        <div className='border border-gray-500 border-opacity-70 rounded-xl bg-opacity-10 bg-orange-500 px-[25px] py-[15px] mt-5 mb-3 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgMoon})` }}>
            <div className="flex items-center">
                <p className='text-2xl font-bold mr-1'>BlockDAG</p>
                <p className='text-2xl font-bold text-yellow-400'>1000 USDT</p>
            </div>
            <p className='text-[17px] text-left text-gray-500 text_shadow'>BlockDAG Network's $2 Million Giveaway - Join & Win Big! 🚀</p>
            {/* Thanh tiến độ */}
            <div className="relative w-full h-2 bg-gray-400 bg-opacity-55 rounded-full mt-8 mb-5">
                <div
                    className="absolute h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
                    style={{ width: `${progress}%` }}
                >
                    <img src="https://cdn-icons-png.flaticon.com/128/4999/4999603.png" alt="" className={'w-[35px] h-auto ml-[95%] transform -translate-y-[40%] rotate-45'} />
                </div>
            </div>
            <span className='flex items-center justify-between text-xs font-semibold mb-5'>
                <p>Start: July 17th</p>
                <p>End: July 24th</p>
            </span>
            <div className='flex items-center justify-between pb-4'>
                <div className='w-[48%] h-10 rounded-lg bg-green-400 hover:bg-green-500 px-[1%] text-[16px] font-bold pt-[6px] hover:cursor-pointer'>Join Giveaway</div>
                <div className='w-[48%] h-10 rounded-lg bg-gray-600 px-[1%] text-[16px] font-bold pt-[6px] hover:cursor-pointer'>All Giveaways</div>
            </div>
        </div >
    )
}

export default BlockDAG