import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import { HiPlay } from 'react-icons/hi2'

const Main = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const movie = movies[1]

    const getMovies = async () => {
        let { data } = await axios(
            'https://encouraging-bat-sun-hat.cyclic.app/api/movie/lk21/latest'
        )
        setMovies(data.results.data)
        setIsLoading(false)
    }
    useEffect(() => {
        getMovies()
    }, [])

    console.log(movie)
    if (isLoading) {
        return <div>Loading</div>
    } else {
        return (
            <>
                <div className='w-full h-[500px] overflow-hidden'>
                    <div className='absolute w-full h-[500px] bg-gradient-to-r from-black'></div>
                    <div>
                        <img
                            className='w-full object-cover'
                            // src={movie.TMDB ? movie?.TMDB?.backdrop_path : ''}
                            src={`https://image.tmdb.org/t/p/original/${movie.TMDB.backdrop_path}`}
                            alt=''
                        />
                    </div>
                    <div className='text-white absolute inset-0 top-[17%] md:top-[30%] mx-6'>
                        <h1 className='text-lg font-bold'>
                            {movie.TMDB.title}
                        </h1>
                        <div className='my-1 flex items-center gap-x-4'>
                            <button className='flex items-center bg-gray-200 px-4 py-1 rounded text-black'>
                                <HiPlay className='mr-1' size={20} />
                                Play
                            </button>
                            <button className='flex items-center border border-gray-200 px-4 py-1 rounded'>
                                <FiInfo className='mr-1' size={20} />
                                Watch Later
                            </button>
                        </div>
                        <span className='text-green-500 mr-4'>
                            Rating : {movie.rating}
                        </span>
                        <span className='text-gray-400'>
                            Release date: {movie.TMDB.release_date}
                        </span>
                        <p className='max-w-3xl'>{movie.TMDB.overview}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Main
