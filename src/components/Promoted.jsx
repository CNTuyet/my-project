import React from 'react'
import { FaRegStar } from "react-icons/fa6";

const Promoted = () => {
    var topCoinList = [
        {
            Index: 1,
            Logo: null,
            CoinSymbol: "BDAG",
            CoinName: "BlockDAG",
            Badges: 0,
            Market_Cap: "presale",
            Price: null,
            Change_24h: "600M USDT",
            Launch: "TBA",
            Total_Boosts: 3.270,
            Has_voted: false,
            Status: 1
        },
        {
            Index: 2,
            Logo: 'https://cdn-icons-png.flaticon.com/128/4322/4322991.png',
            CoinSymbol: "PEPU",
            CoinName: "Pepe Unchained",
            Badges: 1,
            Market_Cap: "presale",
            Price: null,
            Change_24h: null,
            Launch: "TBA",
            Total_Boosts: 2.753,
            Has_voted: false,
            Status: 1
        },
        {
            Index: 3,
            Logo: null,
            CoinSymbol: "MGMES",
            CoinName: "The Meme Games",
            Badges: 2,
            Market_Cap: null,
            Price: null,
            Change_24h: null,
            Launch: "In 1 month",
            Total_Boosts: 2.735,
            Has_voted: true,
            Status: 2
        },
        {
            Index: 4,
            Logo: null,
            CoinSymbol: "WAI",
            CoinName: "Wienerdog",
            Badges: 0,
            Market_Cap: "presale",
            Price: null,
            Change_24h: null,
            Launch: "TBA",
            Total_Boosts: 2.719,
            Has_voted: true,
            Status: 2
        }
    ]
    return (
        <div className='mx-4 text-white border border-green-500 rounded-lg'>
            <h2 className='flex justify-between p-5'>
                <p className='text-2xl font-semibold'>Promoted</p>
                <a href="/" className='text-[17px] text-green-600 hover:underline font-semibold'>Your coin here? Contact us!</a>
            </h2>
            {/* Bảng dữ liệu */}
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="bg-gray-900 border-b-[0.5px] border-opacity-30 font-medium border-neutral-500 ">
                                    <tr className='text-base text-gray-500 py-1'>
                                        <th scope="col" className="w-[4%] px-2 py-4 font-normal text-center">#</th>
                                        <th scope="col" className="w-[8%] px-2 py-4 font-normal">Coin</th>
                                        <th scope="col" className="w-[15%] px-2 py-4 font-normal">Name</th>
                                        <th scope="col" className="w-[7%] px-2 py-4 font-normal">Badges</th>
                                        <th scope="col" className="w-[10%] px-2 py-4 font-normal">Market Cap</th>
                                        <th scope="col" className="w-[10%] px-2 py-4 font-normal">Price</th>
                                        <th scope="col" className="w-[12%] px-2 py-4 font-normal">Change 24h</th>
                                        <th scope="col" className="w-[11%] px-2 py-4 font-normal">Launch</th>
                                        <th scope="col" className="w-[18%] px-2 py-4 font-normal">Total Boosts</th>
                                        <th scope="col" className="pr-0 pl-1 py-4 font-normal"></th>
                                    </tr>
                                </thead>
                                <tbody className='hover:cursor-pointer'>
                                    {topCoinList.map((coin) => (
                                        <tr key={coin.Index} className={`border-t-[0.5px] border-opacity-30 border-neutral-500 ${coin.Status == 1
                                            ? 'bg-yellow-500 bg-opacity-10'
                                            : ''
                                            }`}>
                                            <td className="whitespace-nowrap w-[4%] px-2 py-2 font-medium text-center">{coin.Index}</td>
                                            <td className="whitespace-nowrap w-[8%] px-2 py-2">
                                                {!coin.Logo ? (
                                                    <img className='w-[50px] h-[50px] object-contain rounded-md' src="data:image/jpeg;base64,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" alt="coin_logo" />
                                                ) : (
                                                    <img className='w-[50px] h-[50px] object-contain rounded-md' src={coin.Logo} alt="coin_logo" />
                                                )}
                                            </td>
                                            <td className="whitespace-nowrap w-[15%] px-2 py-2">
                                                <span className='flex flex-col'>
                                                    {/* coin symbol */}
                                                    <p className='font-bold text-[16px]'>{coin.CoinSymbol}</p>
                                                    {/* coin name */}
                                                    <p className='font-semibold text-gray-400'>{coin.CoinName}</p>
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap w-[7%] px-2 py-2">
                                                {coin.Badges === 1 ? (
                                                    <div className='w-[51px] h-[17px] bg-blue-400 rounded-md'></div>
                                                ) : coin.Badges === 2 ? (
                                                    <div className='w-[51px] h-[17px] bg-blue-700 rounded-md'></div>
                                                ) : (
                                                    <div className='w-[51px] h-[17px] bg-blue-400 bg-opacity-0 rounded-md'></div>
                                                )}
                                            </td>
                                            <td className="whitespace-nowrap w-[10%] px-2 py-2 font-medium">
                                                <span className='ml-auto flex items-center space-x-1'>
                                                    {coin.Market_Cap ? (
                                                        <span className='flex'>
                                                            <img src="https://cdn-icons-png.flaticon.com/128/1804/1804209.png" alt="" className='w-6 h-6' />
                                                            <p className='text-base font-normal text-orange-400'>Presale</p>
                                                        </span>
                                                    ) : (
                                                        <p className='font-bold pl-2'>-</p>
                                                    )}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap w-[10%] px-2 py-2">
                                                <span className='flex flex-col'>
                                                    <p className='text-xs text-gray-400 font-semibold'>softcap</p>
                                                    {coin.Price ? (
                                                        <p className='font-bold'>{coin.Price}</p>
                                                    ) : (
                                                        <p className='font-bold'>-</p>
                                                    )}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap w-[12%] px-2 py-2">
                                                <span className='flex flex-col'>
                                                    <p className='text-xs text-gray-400 font-semibold'>hardcap</p>
                                                    {coin.Change_24h ? (
                                                        <p className='font-bold'>{coin.Change_24h}</p>
                                                    ) : (
                                                        <p className='font-bold'>-</p>
                                                    )}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap w-[11%] px-2 py-2">
                                                <p className='font-semibold'>{coin.Launch}</p>
                                            </td>
                                            <td className="whitespace-nowrap w-[18%] px-2 py-2">
                                                <div className='flex'>
                                                    <p className='text-[15px] text-blue-500 font-normal flex items-center'>🚀 x {coin.Total_Boosts}</p>
                                                    {!coin.Has_voted ? (
                                                        <div className='w-[45%] h-auto px-1 pt-1 pb-2 ml-auto bg-blue-400 rounded-md font-bold text-center'>Boost</div>
                                                    ) : (
                                                        <div className='w-[45%] ml-auto'>
                                                            <div className='w-full h-auto px-1 pb-1 my-1 bg-blue-400 rounded-md font-bold text-center'>Boost</div>
                                                            <div className='w-full h-auto px-1 pb-1 my-1 bg-green-400 rounded-md font-bold text-center'>Voted</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap pr-0 pl-1 py-5 flex justify-center my-auto">
                                                <FaRegStar size={20} color="yellow" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promoted