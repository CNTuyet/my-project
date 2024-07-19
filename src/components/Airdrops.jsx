import React from 'react'
import { CgSandClock } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";

const Airdrops = () => {
    return (
        <div className='mt-2 mb-auto'>
            <h2 className='flex justify-between'>
                <p className='text-lg font-bold'>Airdrops</p>

                <a href="/" className='text-[17px] text-green-600 hover:underline'>Show All</a>
            </h2>
            <div className='flex justify-between'>
                <ul className='w-full'>
                    <li>
                        <div className="h-auto flex items-center bg-slate-500 bg-opacity-20 border border-gray-500 border-opacity-70 rounded-xl p-3 my-2">
                            <img src="https://cdn-icons-png.flaticon.com/128/424/424782.png" alt="" className='w-11 h-auto mr-3' />
                            <span className='text-left text-sm mr-auto'>
                                <span >
                                    <a className='text-[16px] hover:underline uppercase' href='#'>Kleekai Inu</a>
                                    <p className='text-gray-400 text-[15px]'>Reward: $KLEEKAI</p>
                                </span>
                            </span>
                            <div className=''>
                                <div className='flex items-center border border-green-500 w-fit px-3 rounded-lg ml-auto'>
                                    <GoDotFill style={{ color: 'green' }} size={20} className='ml-0 mr-2' />
                                    <p>Live</p>
                                </div>
                                <span className='ml-auto flex items-center space-x-1'>
                                    <CgSandClock size={18} className='pt-1' />
                                    <p className='text-sm'>64d:4h:58m</p>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="h-auto flex items-center bg-slate-500 bg-opacity-20 border border-gray-500 border-opacity-70 rounded-xl p-3 my-2">
                            <img src="https://cdn-icons-png.flaticon.com/128/424/424782.png" alt="" className='w-11 h-auto mr-3' />
                            <span className='text-left text-sm mr-auto'>
                                <span >
                                    <a className='text-[16px] hover:underline uppercase' href='#'>Kleekai Inu</a>
                                    <p className='text-gray-400 text-[15px]'>Reward: $KLEEKAI</p>
                                </span>
                            </span>
                            <div className=''>
                                <div className='flex items-center border border-green-500 w-fit px-3 rounded-lg ml-auto'>
                                    <GoDotFill style={{ color: 'green' }} size={20} className='ml-0 mr-2' />
                                    <p>Live</p>
                                </div>
                                <span className='ml-auto flex items-center space-x-1'>
                                    <CgSandClock size={18} className='pt-1' />
                                    <p className='text-sm'>64d:4h:58m</p>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="h-auto flex items-center bg-slate-500 bg-opacity-20 border border-gray-500 border-opacity-70 rounded-xl p-3 my-2">
                            <img src="https://cdn-icons-png.flaticon.com/128/424/424782.png" alt="" className='w-11 h-auto mr-3' />
                            <span className='text-left text-sm mr-auto'>
                                <span >
                                    <a className='text-[16px] hover:underline uppercase' href='#'>Kleekai Inu</a>
                                    <p className='text-gray-400 text-[15px]'>Reward: $KLEEKAI</p>
                                </span>
                            </span>
                            <div className=''>
                                <div className='flex items-center border border-green-500 w-fit px-3 rounded-lg ml-auto'>
                                    <GoDotFill style={{ color: 'green' }} size={20} className='ml-0 mr-2' />
                                    <p>Live</p>
                                </div>
                                <span className='ml-auto flex items-center space-x-1'>
                                    <CgSandClock size={18} className='pt-1' />
                                    <p className='text-sm'>64d:4h:58m</p>
                                </span>
                            </div>
                        </div>
                    </li>
                </ul >
            </div >
        </div >
    )
}

export default Airdrops