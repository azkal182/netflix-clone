import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HiPlay } from 'react-icons/hi2'
import Modal from './Modal'

const Row = ({ title, urlRequest }) => {
    const [movies, setMovies] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState([])

    const showModal = (datas) => {
        setData(datas)
        // console.log(datas)
        setOpenModal(true)
    }

    const hideModal = () => {
        setOpenModal(false)
    }

    const getData = (datas) => {
        data = datas
    }

    useEffect(() => {
        axios(urlRequest).then((res) => {
            setMovies(res.data.results.data)
        })
    }, [])

    return (
        <>
            {openModal == true && (
                <Modal
                    show={openModal}
                    handleClose={() => hideModal()}
                    datas={data}
                />
            )}

            <div className='text-white mx-6'>
                <h1 className='font-bold text-lg'>{title}</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                    {movies.map((movie, index) => {
                        return (
                            <div
                                key={index}
                                className='card overflow-hidden w-[200] h-[300] relative transition ease-in-out duration-300 hover:scale-110'
                            >
                                <div className='opacity-0 align-middle hover:opacity-100 absolute w-full h-full inset-0 bg-gradient-to-t from-black/70 via-transparent'>
                                    <button
                                        onClick={() => showModal(movie)}
                                        className='h-full w-full'
                                    ></button>
                                </div>
                                <img
                                    className='w-full object-cover'
                                    src={movie.poster}
                                    alt={movie.title}
                                />
                                {/* <div className='absolute top-[60%] inset-0'>
                                    <div className='w-full px-2'>
                                        <div className='flex items-center justify-between w-full bg-blue-400'>
                                            <button className='bg-gray-800 p-1 rounded-full'>
                                                <HiPlay
                                                    className='text-white'
                                                    size={18}
                                                />
                                            </button>
                                            <button className='bg-gray-800 p-1 rounded-full'>
                                                <HiPlay
                                                    className='text-white'
                                                    size={18}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Row
