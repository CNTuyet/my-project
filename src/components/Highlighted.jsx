import React from 'react'
import { CgSandClock } from "react-icons/cg";

const Highlighted = () => {
    return (
        <div className='border border-yellow-400 rounded-xl bg-opacity-10 bg-orange-500 px-[25px] py-[15px] mt-5 mb-4'>
            <h2 className='flex justify-between mb-2'>
                <span className='flex items-center'>
                    <p className='text-lg font-bold'>Highlighted</p>
                    <img src="https://cdn-icons-png.flaticon.com/128/728/728139.png" alt="" className='w-5 h-4' />
                </span>
                <a href="/" className='text-[17px] text-green-600 hover:underline'>Your coin here?</a>
            </h2>
            <div className='flex justify-between'>
                <ul className='w-full'>
                    <li>
                        <div className="h-11 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/1197/1197409.png" alt="" className='w-9 h-auto mr-3' />
                            <span className='text-left text-sm'>
                                <a href="#" className='hover:underline hover:decoration-green-600'>
                                    <p className='text-green-600 uppercase'>Play</p>
                                    <p>playdoge</p>
                                </a>
                            </span>
                            <span className='ml-auto flex items-center space-x-1'>
                                <CgSandClock size={24} className='pt-1' />
                                <p className='text-base text-orange-400'>Presale</p>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="h-11 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/1197/1197409.png" alt="" className='w-9 h-auto mr-3' />
                            <span className='text-left text-sm'>
                                <a href="#" className='hover:underline hover:decoration-green-600'>
                                    <p className='text-green-600 uppercase'>Play</p>
                                    <p>playdoge</p>
                                </a>
                            </span>
                            <span className='ml-auto flex items-center space-x-1'>
                                <CgSandClock size={24} className='pt-1' />
                                <p className='text-base text-orange-400'>Presale</p>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="h-11 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/1197/1197409.png" alt="" className='w-9 h-auto mr-3' />
                            <span className='text-left text-sm'>
                                <a href="#" className='hover:underline hover:decoration-green-600'>
                                    <p className='text-green-600 uppercase'>Play</p>
                                    <p>playdoge</p>
                                </a>
                            </span>
                            <span className='ml-auto flex items-center space-x-1'>
                                <CgSandClock size={24} className='pt-1' />
                                <p className='text-base text-orange-400'>Presale</p>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="h-11 flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/1197/1197409.png" alt="" className='w-9 h-auto mr-3' />
                            <span className='text-left text-sm'>
                                <a href="#" className='hover:underline hover:decoration-green-600'>
                                    <p className='text-green-600 uppercase'>Play</p>
                                    <p>playdoge</p>
                                </a>
                            </span>
                            <span className='ml-auto flex items-center space-x-1'>
                                <CgSandClock size={24} className='pt-1' />
                                <p className='text-base text-orange-400'>Presale</p>
                            </span>
                        </div>
                    </li>
                </ul >
            </div >
        </div >
    )
}

export default Highlighted