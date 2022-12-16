import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { IoNotificationsCircleOutline } from 'react-icons/io5'
const Navbar = () => {
    return (
        <>
            <div className='w-full flex items-center text-white justify-between absolute p-4 px-6 z-[100]'>
                <div className='gap-4 flex items-center  font-semibold'>
                    <div className='text-red-500 font-bold text-2xl mr-4'>
                        NETFLIX
                    </div>
                    <div className='hidden md:block'>Home</div>
                    <div className='hidden md:block'>Movie</div>
                </div>
                <div className='hidden items-center gap-4 md:flex'>
                    <div className='relative overflow-hidden focus:rounded-lg text-gray-900 rounded-lg'>
                        <FiSearch className='absolute text-gray-500 inset-y-0 left-0 flex items-center mt-[6px] ml-1 mx-2' />
                        <input
                            type='text'
                            className='pl-6 pr-2 py-[2px] bg-gray-100'
                            placeholder='Search'
                        />
                    </div>
                    <div>
                        <IoNotificationsCircleOutline size={25} />
                    </div>
                    <div>profile</div>
                </div>
                <div className='block md:hidden'>
                    <button>
                        <HiOutlineBars3 size={30} />
                    </button>
                </div>
            </div>
            <div className='text-white bg-red-500 w-full absolute top-14 hidden'>
                <div>
                    <input
                        className='w-full'
                        type='text'
                        placeholder='Search'
                    />
                </div>
                <ul>
                    <li>oke</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
