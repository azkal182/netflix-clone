import { Dialog, Transition } from '@headlessui/react'
import axios, { Axios } from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { HiPlay } from 'react-icons/hi2'
import { VscMute, VscUnmute } from 'react-icons/vsc'
import ReactPlayer from 'react-player'

export default function Modal({ handleClose, show, datas }) {
    const data = datas ? datas : ''
    const [video, setVideo] = useState('')
    const [urlVideo, setUrlVideo] = useState([])
    const [isMute, setIsMute] = useState(true)
    const [cast, setCast] = useState([])
    // const data = {
    //     title: 'The Volcano: Rescue from Whakaari (2022)',
    //     poster: 'https://s0.indexmovies.xyz/wp-content/uploads/2022/12/film-the-volcano-rescue-from-whakaari-2022-lk21-d21.jpg',
    //     id: 'the-volcano-rescue-from-whakaari-2022',
    //     rating: '8.5',
    //     quality: 'HD',
    //     TMDB: {
    //         adult: false,
    //         backdrop_path: '/77xrCIpZ5StH1lkQj8EqBmWwt3g.jpg',
    //         genre_ids: [99],
    //         id: 1018645,
    //         original_language: 'en',
    //         original_title: 'The Volcano: Rescue from Whakaari',
    //         overview:
    //             'A close examination of the Whakaari / White Island volcanic eruption of 2019 in which 22 lives were lost, the film viscerally recounts a day when ordinary people were called upon to do extraordinary things, placing this tragic event within the larger context of nature, resilience, and the power of our shared humanity.',
    //         popularity: 3.22,
    //         poster_path: '/7LQUp64Ub9JfnLVuzyhEHdc7DBg.jpg',
    //         release_date: '2022-11-03',
    //         title: 'The Volcano: Rescue from Whakaari',
    //         video: false,
    //         vote_average: 0,
    //         vote_count: 0,
    //     },
    // }
    // let [isOpen, setIsOpen] = useState(true)

    // function closeModal() {
    //     setIsOpen(false)
    // }

    // function openModal() {
    //     setIsOpen(true)
    // }

    // console.log(data)

    const getVideo = async (id) => {
        let { data } = await axios(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=243bd781b4261e4fade9058a64105c28`
        )
        await setVideo(data)
        setUrlVideo(
            data.results[Math.floor(Math.random() * data.results.length)]
        )
        // console.log(data.results)
    }

    let getCast = async (id) => {
        try {
            let { data } = await axios(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=243bd781b4261e4fade9058a64105c28&language=en-US`
            )
            setCast(data.cast)
            console.log(data.cast)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getVideo(data.TMDB.id)
        getCast(data.TMDB.id)
    }, [data])
    // console.log(urlVideo)
    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...'
        } else {
            return str
        }
    }
    const isOpen = show ? true : false

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as='div'
                    className='relative z-10'
                    onClose={handleClose}
                >
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className='w-full max-w-[660px] transform overflow-hidden rounded-lg bg-black text-left align-middle shadow-xl transition-all'>
                                    <div className='top-0'>
                                        <div className='top-0 overflow-hidden h-[340px] relative'>
                                            <div className='absolute inset-0 top-0 h-[340px] bg-gradient-to-t from-black via-transparent'></div>

                                            <ReactPlayer
                                                className='w-full scale-110'
                                                url={`https://www.youtube.com/watch?v=${urlVideo.key}`}
                                                playing={true}
                                                loop={true}
                                                volume={1}
                                                muted={isMute}
                                                width='660px'
                                                height='100%'
                                                config={{
                                                    youtube: {
                                                        playerVars: {
                                                            disablekb: 1,
                                                            origin: 'http://localhost:5173',
                                                        },
                                                    },
                                                }}
                                            />
                                            <div className='absolute bottom-0 w-full mb-12 px-10 flex items-center justify-between'>
                                                <button className='flex items-center bg-gray-200 px-6 py-2 rounded'>
                                                    <HiPlay
                                                        className='mr-1'
                                                        size={25}
                                                    />
                                                    Play
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setIsMute(!isMute)
                                                    }
                                                    className='text-white rounded-full border border-gray-200 p-2'
                                                >
                                                    {isMute ? (
                                                        <VscMute />
                                                    ) : (
                                                        <VscUnmute />
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        <div className='text-gray-100 p-8 w-full flex'>
                                            <div className='w-[70%]'>
                                                <h1 className='text-xl font-bold'>
                                                    {data.title}
                                                </h1>
                                                <p className='text-sm text-gray-200'>
                                                    {data.TMDB.release_date}
                                                </p>
                                                <p className='text-gray-200'>
                                                    {truncateString(
                                                        data.TMDB.overview,
                                                        200
                                                    )}
                                                </p>
                                            </div>
                                            <div className='pl-4 w-[30%]'>
                                                <p>
                                                    Cast :
                                                    {cast
                                                        .slice(0, 5)
                                                        .map((cast, index) => {
                                                            return (
                                                                <span>
                                                                    {` ${cast.name},`}
                                                                </span>
                                                            )
                                                        })}
                                                </p>
                                                <br />
                                                <p>Genres :</p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

// export default Modal;
