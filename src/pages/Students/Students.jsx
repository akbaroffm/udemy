import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'

function Students() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const ModalLogout = () => {
    setShowModal(true)
  }
  return (
    <div className='flex justify-between items-center pl-[38px]'>
      <h2 className='text-[#4F4F4F] text-[20px] font-medium leading-[24px]'>Students</h2>
      <div className='flex items-center justify-end pt-[19px] pr-[69px] mb-[4px] gap-[3px] pb-[21px]'>
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.0183 24.5C15.8135 24.8539 15.5191 25.1477 15.1649 25.352C14.8106 25.5562 14.4089 25.6637 14 25.6637C13.5911 25.6637 13.1894 25.5562 12.8351 25.352C12.4809 25.1477 12.1865 24.8539 11.9817 24.5M21.1563 12.8334C21.8342 19.1042 24.5 21 24.5 21H3.5C3.5 21 7 18.5115 7 9.80004C7 7.82021 7.73733 5.92087 9.04983 4.52087C10.3635 3.12087 12.145 2.33337 14 2.33337C14.3932 2.33337 14.784 2.36837 15.1667 2.43837L21.1563 12.8334ZM22.1667 9.33337C23.0949 9.33337 23.9852 8.96462 24.6415 8.30825C25.2979 7.65187 25.6667 6.76163 25.6667 5.83337C25.6667 4.90512 25.2979 4.01488 24.6415 3.3585C23.9852 2.70212 23.0949 2.33337 22.1667 2.33337C21.2384 2.33337 20.3482 2.70212 19.6918 3.3585C19.0354 4.01488 18.6667 4.90512 18.6667 5.83337C18.6667 6.76163 19.0354 7.65187 19.6918 8.30825C20.3482 8.96462 21.2384 9.33337 22.1667 9.33337Z" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <ellipse cx="6.3" cy="6.3" rx="6.3" ry="6.3" transform="matrix(-1 0 0 1 26.6001 0)" fill="#2D88D4" />
        </svg>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div>
            <h2 className='text-center text-[25px] text-white font-bold mb-6'>Are you sure to exit?</h2>
            <div className='flex items-center justify-center space-x-4'>
              <button onClick={() => setShowModal(false)} className='w-[80px] bg-green-400 p-2 rounded-md font-semibold text-white transition hover:scale-105'>Cancel</button>
              <button onClick={() => navigate("/")} className='w-[90px]  bg-red-400 p-2 rounded-md font-semibold text-white transition hover:scale-105'>Yes</button>
            </div>
          </div>
        </Modal>
        <button onClick={ModalLogout} className='w-[120px] rounded-[8px] p-[10px] text-[14px] text-[#424242] text-center font-semibold '>Log out</button>
      </div>
    </div>
  )
}

export default Students