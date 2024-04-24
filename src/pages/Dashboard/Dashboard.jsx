import React, {useState} from 'react'
import AddOther from '../../components/AddOther/AddOther'
import admins from "../../assets/images/admins.svg"
import classes from "../../assets/images/classes.svg"
import students from "../../assets/images/studentsimg.svg"
import Modal from '../../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import UnAuthentication from '../../UnAuthentication'

function Home() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const ModalLogout = () => {
    setShowModal(true)
    }
    return (
        <>
            <header className='bg-[#FCFAFA] pt-[29px] pl-[124px] pr-[127px]'>
                <div className='flex items-center justify-between'>
                    <p className='w-[583px] text-[#424242] text-[16px] leading-[19px] '> <b className='font-medium'>Learn  how to launch faster</b>
                        <br />
                        watch our webinar for tips from our experts and get a limited time offer.</p>
                    <div className='flex items-center gap-[48px] pb-[21px]'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0183 24.5C15.8135 24.8539 15.5191 25.1477 15.1649 25.352C14.8106 25.5562 14.4089 25.6637 14 25.6637C13.5911 25.6637 13.1894 25.5562 12.8351 25.352C12.4809 25.1477 12.1865 24.8539 11.9817 24.5M21.1563 12.8334C21.8342 19.1042 24.5 21 24.5 21H3.5C3.5 21 7 18.5115 7 9.80004C7 7.82021 7.73733 5.92087 9.04983 4.52087C10.3635 3.12087 12.145 2.33337 14 2.33337C14.3932 2.33337 14.784 2.36837 15.1667 2.43837L21.1563 12.8334ZM22.1667 9.33337C23.0949 9.33337 23.9852 8.96462 24.6415 8.30825C25.2979 7.65187 25.6667 6.76163 25.6667 5.83337C25.6667 4.90512 25.2979 4.01488 24.6415 3.3585C23.9852 2.70212 23.0949 2.33337 22.1667 2.33337C21.2384 2.33337 20.3482 2.70212 19.6918 3.3585C19.0354 4.01488 18.6667 4.90512 18.6667 5.83337C18.6667 6.76163 19.0354 7.65187 19.6918 8.30825C20.3482 8.96462 21.2384 9.33337 22.1667 9.33337Z" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <ellipse cx="6.3" cy="6.3" rx="6.3" ry="6.3" transform="matrix(-1 0 0 1 26.6001 0)" fill="#2D88D4" />
                        </svg>
                        <Modal showModal={showModal} setShowModal={setShowModal}>
                            <div>
                                <h2 className='text-center text-[25px] text-white font-bold mb-6'>Are you sure to exit?</h2>
                                <div className='flex items-center justify-center space-x-4'>
                                <button onClick={() => setShowModal(false)} className='w-[80px] bg-green-400 p-2 rounded-md font-semibold text-white transition hover:scale-105'>Cancel</button>
                                <button onClick={() => navigate('/')} className='w-[90px]  bg-red-400 p-2 rounded-md font-semibold text-white transition hover:scale-105'>Yes</button>
                                </div>
                            </div>
                        </Modal>
                        <button onClick={ModalLogout} className='w-[120px] rounded-[8px] bg-[#509CDB] p-[10px] text-[14px] text-[#FCFAFA] text-center font-semibold '>Log out</button>
                    </div>
                </div>
            </header>
            <div className='flex gap-[13px] items-end pt-[53px] pl-[126px] pb-[130px] pr-[90px] bg-[#fff]'>
                <div className='flex flex-col'>
                    <h1 className='text-[36px] font-semibold leading-[44px] mb-[23px] text-[#4F4F4F] text-start'>Welcome to your dashboard, Udemy school</h1>
                    <p className='text-[24px] text-[#4F4F4F] leading-[29px] font-semibold mb-[6px] ml-[105px]'>Uyo/school/@teachable.com</p>
                    <div className='pt-[68px] gap-[51px] flex flex-col pr-[20px] pl-[91px] '>
                        <AddOther src={admins} title={"Add other admins "} alt={"Admins"} text={"Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!"} />
                        <AddOther src={classes} title={"Add classes"} alt={"Classes"} text={"Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!"} />
                        <AddOther src={students} title={"Add students"} alt={"Students"} text={"Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!"} />
                    </div>
                </div>
                <button className='w-[181px] rounded-[30px] bg-[#152259] text-[#FCFAFA] text-[14px] font-semibold flex items-center mb-[10px] justify-between py-[22px] px-[24px]'>
                    <div className='flex space-x-[8px] items-center'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00016 1.33331C4.32416 1.33331 1.3335 4.32398 1.3335 7.99998V10.762C1.3335 11.4446 1.9315 12 2.66683 12H3.3335C3.51031 12 3.67988 11.9297 3.8049 11.8047C3.92992 11.6797 4.00016 11.5101 4.00016 11.3333V7.90465C4.00016 7.72784 3.92992 7.55827 3.8049 7.43324C3.67988 7.30822 3.51031 7.23798 3.3335 7.23798H2.72816C3.09883 4.65798 5.31883 2.66665 8.00016 2.66665C10.6815 2.66665 12.9015 4.65798 13.2722 7.23798H12.6668C12.49 7.23798 12.3204 7.30822 12.1954 7.43324C12.0704 7.55827 12.0002 7.72784 12.0002 7.90465V12C12.0002 12.7353 11.4022 13.3333 10.6668 13.3333H9.3335V12.6666H6.66683V14.6666H10.6668C12.1375 14.6666 13.3335 13.4706 13.3335 12C14.0688 12 14.6668 11.4446 14.6668 10.762V7.99998C14.6668 4.32398 11.6762 1.33331 8.00016 1.33331Z" fill="#FCFAFA" />
                        </svg>
                        <p className='text-[14px] font-semibold text-[#FCFAFA] leading-[17px]'>Support</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10L8 6L12 10" stroke="#FCFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Home
