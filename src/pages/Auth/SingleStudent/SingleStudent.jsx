import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Modal from '../../../components/Modal/Modal'

function SingleStudent({ dashboard }) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const ModalLogout = () => {
    setShowModal(true)
  }
  const { id } = useParams()
  const singleData = dashboard.find(item => item.id == id)

  return (
    <>
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
      <div className='flex flex-col  pt-[66px] pl-[163px] pr-[158px] bg-[#ffffff] rounded-[16px]'>
        <div className='flex items-center gap-[105px]'>
          <div className='flex flex-col items-center justify-center'>
            <img className='rounded-[50%] mb-[30px]' src={singleData.avatarImg} alt="Student img" width={280} height={280} />
            <div className='flex flex-col'>
              <h2 className='text-[#1A1A1A] text-[16px] font-bold'>{singleData.name}</h2>
              <p className='text-[#A7A7A7] text-[14px] font-bold'>{singleData.subject}</p>
            </div>
            <div className='flex items-center mt-[40px] gap-[25px]'>
              <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60.8" height="60.8" rx="8" fill="#EFF3FA" />
                <path d="M25.5624 14.1625L18.0374 19.075C15.6249 20.65 15.6249 24.175 18.0374 25.75L25.5624 30.6625C26.9124 31.55 29.1374 31.55 30.4874 30.6625L37.9749 25.75C40.3749 24.175 40.3749 20.6625 37.9749 19.0875L30.4874 14.175C29.1374 13.275 26.9124 13.275 25.5624 14.1625Z" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.0374 27.35L20.0249 33.2125C20.0249 34.8 21.2499 36.5 22.7499 37L26.7374 38.325C27.4249 38.55 28.5624 38.55 29.2624 38.325L33.2499 37C34.7499 36.5 35.9749 34.8 35.9749 33.2125V27.4125" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M39.75 29.75V22.25" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <a href="tel:+998935154884">
                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.133301" width="60.8" height="60.8" rx="8" fill="#EFF3FA" />
                  <path d="M43.4625 37.9125C43.4625 38.3625 43.3625 38.825 43.15 39.275C42.9375 39.725 42.6625 40.15 42.3 40.55C41.6875 41.225 41.0125 41.7125 40.25 42.025C39.5 42.3375 38.6875 42.5 37.8125 42.5C36.5375 42.5 35.175 42.2 33.7375 41.5875C32.3 40.975 30.8625 40.15 29.4375 39.1125C28 38.0625 26.6375 36.9 25.3375 35.6125C24.05 34.3125 22.8875 32.95 21.85 31.525C20.825 30.1 20 28.675 19.4 27.2625C18.8 25.8375 18.5 24.475 18.5 23.175C18.5 22.325 18.65 21.5125 18.95 20.7625C19.25 20 19.725 19.3 20.3875 18.675C21.1875 17.8875 22.0625 17.5 22.9875 17.5C23.3375 17.5 23.6875 17.575 24 17.725C24.325 17.875 24.6125 18.1 24.8375 18.425L27.7375 22.5125C27.9625 22.825 28.125 23.1125 28.2375 23.3875C28.35 23.65 28.4125 23.9125 28.4125 24.15C28.4125 24.45 28.325 24.75 28.15 25.0375C27.9875 25.325 27.75 25.625 27.45 25.925L26.5 26.9125C26.3625 27.05 26.3 27.2125 26.3 27.4125C26.3 27.5125 26.3125 27.6 26.3375 27.7C26.375 27.8 26.4125 27.875 26.4375 27.95C26.6625 28.3625 27.05 28.9 27.6 29.55C28.1625 30.2 28.7625 30.8625 29.4125 31.525C30.0875 32.1875 30.7375 32.8 31.4 33.3625C32.05 33.9125 32.5875 34.2875 33.0125 34.5125C33.075 34.5375 33.15 34.575 33.2375 34.6125C33.3375 34.65 33.4375 34.6625 33.55 34.6625C33.7625 34.6625 33.925 34.5875 34.0625 34.45L35.0125 33.5125C35.325 33.2 35.625 32.9625 35.9125 32.8125C36.2 32.6375 36.4875 32.55 36.8 32.55C37.0375 32.55 37.2875 32.6 37.5625 32.7125C37.8375 32.825 38.125 32.9875 38.4375 33.2L42.575 36.1375C42.9 36.3625 43.125 36.625 43.2625 36.9375C43.3875 37.25 43.4625 37.5625 43.4625 37.9125Z" stroke="#A7A7A7" stroke-width="1.5" stroke-miterlimit="10" />
                  <path d="M39.125 26.25C39.125 25.5 38.5375 24.35 37.6625 23.4125C36.8625 22.55 35.8 21.875 34.75 21.875" stroke="#A7A7A7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M43.5 26.25C43.5 21.4125 39.5875 17.5 34.75 17.5" stroke="#A7A7A7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="mailto:akbarovmirolim171@gmail.com">
                <svg width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.266602" width="60.8" height="60.8" rx="8" fill="#EFF3FA" />
                  <path d="M37.25 40.625H24.75C21 40.625 18.5 38.75 18.5 34.375V25.625C18.5 21.25 21 19.375 24.75 19.375H37.25C41 19.375 43.5 21.25 43.5 25.625V34.375C43.5 38.75 41 40.625 37.25 40.625Z" stroke="#A7A7A7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M37.25 26.25L33.3375 29.375C32.05 30.4 29.9375 30.4 28.65 29.375L24.75 26.25" stroke="#A7A7A7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='w-[335px] flex flex-col'>
              <h3 className='text-[16px] font-semibold mb-[16px] text-[#1A1A1A]'>About</h3>
              <p className='text-[#A7A7A7] text-[16px] font-medium leading-[21px] mb-[30px]'>{singleData.about}</p>
              <div className='flex items-center gap-[35px]'>
                <div className='w-[133px] flex flex-col gap-[6px]'>
                  <h4 className='text-[#1A1A1A] text-[12px] font-semibold'>Age</h4>
                  <p className='text-[#A7A7A7] text-[14px] font-medium leading-[17px]'>{singleData.age}</p>
                </div>
                <div className='w-[82px] flex flex-col gap-[6px]'>
                  <h5 className='text-[#1A1A1A] text-[12px] font-semibold'>Gender</h5>
                  <p className='text-[#A7A7A7] text-[14px] font-medium leading-[17px]'>{singleData.gender}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleStudent
