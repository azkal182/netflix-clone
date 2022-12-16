import React, { useState } from 'react'
import Main from '../components/Main'
import Modal from '../components/Modal'
import Row from '../components/Row'

const Home = () => {
    const [openModal, setOpenModal] = useState(false)

    const showModal = () => {
        setOpenModal(true)
        // console.log(isOpen)
    }

    const hideModal = () => {
        setOpenModal(false)
    }

    return (
        <>
            <Main />
            <Row
                title='Popular'
                urlRequest='https://encouraging-bat-sun-hat.cyclic.app/api/movie/lk21/popular'
            />
            <Row
                title='Latest'
                urlRequest='https://encouraging-bat-sun-hat.cyclic.app/api/movie/lk21/latest'
            />
            {/* <button className='mt-72 bg-blue-500' onClick={() => showModal()}>
                Show
            </button> */}
            {/* <Modal show={openModal} handleClose={() => hideModal()} /> */}
        </>
    )
}

export default Home
