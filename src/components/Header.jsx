import React, { useState, useRef, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { IoClose, IoRocketSharp } from "react-icons/io5"
import logo from '../assets/img/logo.jpg';
import { TERipple } from 'tw-elements-react';
import { FaStar, FaCircleArrowUp } from "react-icons/fa6";
import { RiAdvertisementLine } from "react-icons/ri";
import { TbLogin2, TbCoins } from "react-icons/tb";
import { BsPersonPlusFill } from "react-icons/bs";
import { MdAccessTimeFilled, MdAddCircle } from "react-icons/md";
import { ImFire } from "react-icons/im";
import { RxLapTimer } from "react-icons/rx";
import { IoMdArrowDropdown, IoMdArrowDropup, IoIosCheckmarkCircle } from "react-icons/io";
import { FcDatabase } from "react-icons/fc";
import { GrMail } from "react-icons/gr";
import { HiDocumentText } from "react-icons/hi";
import { BiSolidBook } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";

const Header = () => {
    const [nav, setNav] = useState(false);
    const [IsSearchFocus, setSearch] = useState(false);
    const searchInputRef = useRef(null);
    const [IsDropdown, setIsDropdown] = useState(false);

    //Thay đổi giá trị của nav thành ngược lại true <-> false
    const handleNav = () => {
        setNav(!nav);
    }

    //Thay đổi giá trị của IsDropdown thành ngược lại true <-> false
    const toggleDropdown = () => {
        setIsDropdown(!IsDropdown);
    };

    //Thay đổi giá trị của IsSearchFocus thành ngược lại true <-> false
    const handleSearch = () => {
        setSearch(!IsSearchFocus);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Kiểm tra xem vị trí click có nằm trong thanh search bar hay không
            if (
                searchInputRef.current &&
                !searchInputRef.current.contains(event.target)
            ) {
                // Nếu click ra ngoài thanh search bar, ẩn div
                setSearch(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchInputRef]);

    return (
        <div className='text-white bg-[#141a26] flex justify-between items-center h-[88px] max-w-full mx-auto px-28'>
            <a href="/">
                <img src={logo} alt="" className='w-[241px] h-[50px]' />
            </a>
            {/* search bar */}
            <div className="flex-1 ml-5" onFocus={handleSearch}>
                {/* search bar khi chưa được focus */}
                <div className="relative flex w-full flex-wrap items-stretch bg-[#1f2734] rounded-lg hover:shadow-[0_0_0_1px_rgba(0,170,114,1)]">
                    {/* <!--Search button--> */}
                    <TERipple color='light'>
                        <button
                            className={!IsSearchFocus ? "relative z-[2] flex items-center rounded-r bg-primary px-2 py-2.5 text-xs font-medium uppercase leading-tight text-gray-600 shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg active:bg-primary-800 active:shadow-lg" : "hidden"}
                            type="button"
                            id="button-addon1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </TERipple>
                    <input
                        type="search"
                        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-md bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-gray-600 outline-none transition duration-200 ease-in-out dark:text-gray-600 placeholder:text-gray-600 "
                        placeholder="Search coins"
                        aria-label="Search"
                        aria-describedby="button-addon1" />
                </div>
            </div>
            {/* search bar khi được focus */}
            <div
                className={IsSearchFocus ? 'fixed top-0 left-0 w-full h-full bg-black/80' : 'hidden'}>
                <div
                    ref={searchInputRef}
                    className="relative flex w-4/5 flex-wrap items-stretch bg-[#1f2734] rounded-lg shadow-[0_0_0_1px_rgba(0,170,114,1)] top-[16px] left-1/2 -translate-x-1/2">
                    {/* <!--Search button--> */}
                    <TERipple color='light'>
                        <button
                            className="relative z-[2] flex items-center bg-primary px-2 py-2.5 text-xs font-medium uppercase leading-tight text-gray-600 shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg active:bg-primary-800 active:shadow-lg"
                            type="button"
                            id="button-addon2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </TERipple>
                    <input
                        type="search"
                        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto bg-[#1e2635] bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-gray-200 outline-none transition duration-200 ease-in-out dark:text-gray-600 placeholder:text-gray-600"
                        placeholder="Search coins"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                    {/* button đóng cửa sổ search */}
                    <button className='bg-[#00aa72] px-4 rounded-lg' onFocus={handleSearch}>
                        <IoClose size={20} />
                    </button>
                </div>
            </div>

            {/* Button */}
            <div className='bg-[#00aa72] h-[50px] rounded-md ml-20 mr-5'>
                <a href="/" className='py-[10px] px-[23px] text-lg inline-block'>
                    <strong className='text-[15px] flex justify-center'>Submit Coin</strong>
                </a>
            </div>
            {/* Button ẩn hiện navbar */}
            <div onClick={handleNav} className='block'>
                {/* Nếu nav = true thì hiển thị icon close, ngược lại hiển thị icon menu */}
                {!nav && (<AiOutlineMenu size={27} />)}
            </div>
            {/* Nếu nav = true thì hiển thị thanh navbar, ngược lại ẩn nó qua bên cạnh */}
            <div className={nav ? 'fixed left-0 top-0 h-full w-full bg-black/80' : 'fixed left-[-100%]'}>
                {/* button close navbar */}
                {nav && (
                    <div onClick={handleNav} className='block'>
                        <AiOutlineClose size={28} className='fixed right-1/4 top-5' />
                    </div>)}
                {/* navbar */}
                {/* ease-in-out là animation vs thời gian là duration, overflow-auto cho phép cuộn dọc */}
                <div className='absolute right-0 top-0 w-[23%] h-full bg-[#222c3f] ease-in-out duration-500 text-white overflow-auto'>
                    <div className='pl-10 pt-1'>
                        <p className='w-full text-gray-500 pt-4 text-[15px]'> Account</p>
                        <ul className='mb-2'>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <FaStar size={20} className="mr-4" />
                                    <p> Watchlist </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <RiAdvertisementLine size={22} className="mr-4" />
                                    <p> Ads </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <IoRocketSharp size={20} className="mr-4" />
                                    <p> Boosts </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <TbLogin2 size={22} className="mr-4 ml-[-2px]" />
                                    <p> Login </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <BsPersonPlusFill size={22} className="mr-4" />
                                    <p> Register </p>
                                </a>
                            </li>
                        </ul>
                        <p className='w-full text-gray-500 pt-4 text-[15px]'> Cryptocurrencies</p>
                        <ul className='mb-2'>
                            <li className='pt-2 border-gray-600'>
                                <a href="#" className='text-base font-semibold flex items-center' onClick={toggleDropdown}>
                                    <MdAccessTimeFilled size={20} className="mr-4" />
                                    <p> Today's best </p>
                                    {!IsDropdown && (
                                        <IoMdArrowDropdown size={24} className="ml-20" />
                                    )}
                                    {IsDropdown && (
                                        <IoMdArrowDropup size={24} className="ml-20" />
                                    )}
                                </a>
                                {IsDropdown && (
                                    <div className="font-semibold bg-[#222c3f] text-gray-400 px-4 py-2 rounded z-10 block">
                                        <ul>
                                            <li className='py-1'>
                                                <a href="/" className='text-base font-semibold flex items-center'>
                                                    <FcDatabase size={22} className="mr-4" />
                                                    <p> SOL </p>
                                                </a>
                                            </li>
                                            <li className='py-1'>
                                                <a href="/" className='text-base font-semibold flex items-center'>
                                                    <img src="https://cdn-icons-png.flaticon.com/128/1777/1777889.png" alt="" className='w-[22px] h-auto mr-4' />
                                                    <p> ETH </p>
                                                </a>
                                            </li>
                                            <li className='py-1'>
                                                <a href="/" className='text-base font-semibold flex items-center'>

                                                    <img src="https://cdn-icons-png.flaticon.com/128/6557/6557077.png" alt="" className='w-[22px] h-auto mr-4' />

                                                    <p> BSC </p>
                                                </a>
                                            </li>
                                            <li className='py-1'>
                                                <a href="/" className='text-base font-semibold flex items-center'>
                                                    <p> All projects </p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <ImFire size={22} className="mr-4" />
                                    <p> All time Best </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <MdAddCircle size={20} className="mr-4" />
                                    <p> New listings </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <TbCoins size={22} className="mr-4" />
                                    <p> Airdrops </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <RxLapTimer size={22} className="mr-4" />
                                    <p> Presales </p>
                                </a>
                            </li>
                        </ul>
                        <p className='w-full text-gray-500 pt-4 text-[15px]'> CoinSniper</p>
                        <ul className='mb-2'>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <FaCircleArrowUp size={18} className="mr-4" />
                                    <p> Submit coin </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <FaCircleArrowUp size={17} className="mr-4" />
                                    <p> Update coin </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <GrMail size={17} className="mr-4" />
                                    <p> Contact Us </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <HiDocumentText size={19} className="mr-4 " />
                                    <p> Blog </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <BiSolidBook size={20} className="mr-4" />
                                    <p> Dictionary </p>
                                </a>
                            </li>
                        </ul>
                        <p className='w-full text-gray-500 pt-4 text-[15px]'> Services</p>
                        <ul className='mb-2'>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <RiAdvertisementLine size={22} className="mr-4" />
                                    <p> Advertising </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <FaHandshake size={21} className="mr-4" />
                                    <p> Partners </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <IoIosCheckmarkCircle size={22} className="mr-4" />
                                    <p> KYC verification </p>
                                </a>
                            </li>
                            <li className='pt-2 border-gray-600'>
                                <a href="/" className='text-base font-semibold flex items-center'>
                                    <img src="https://cdn-icons-png.flaticon.com/128/9616/9616817.png" alt="" className='w-[23px] h-auto mr-4' />
                                    <p> AMA hosting </p>
                                </a>
                            </li>
                        </ul>
                        {/* social media */}
                        <div className='mt-6 mb-9'>
                            <a href="/" className='flex items-center bg-[#1f2634] rounded-sm mr-6 mt-4'>
                                <span>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="/" className='w-[38px] h-auto' />
                                </span>
                                <div className='text-[13px] font-medium text-gray-500 pl-3'>Follow us on twitter!</div>
                            </a>
                            <a href="/" className='flex items-center bg-[#1f2634] rounded-sm mr-6 mt-4'>
                                <span>
                                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="/" className='w-[38px] h-auto' />
                                </span>
                                <div className='text-[13px] font-medium text-gray-500 pl-3'>Join our telegram group!</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header