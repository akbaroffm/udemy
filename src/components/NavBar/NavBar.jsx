import React from 'react'
import Logo from "../../assets/images/logo.svg"
import { Link } from 'react-router-dom'
import { Billing, Dashboard, Exams, Settings, Students, Teachers } from '../../assets/images/Icon'
import Navlink from '../Navlink/Navlink'
import New from '../../assets/images/new.svg'


function NavBar() {
    return (
        <>
            <Link className='flex items-center justify-center' to={'/'}>
                <img src={Logo} alt="Logo img" width={65} height={65} />
            </Link>
            <h2 className="mt-[22px] mb-[27px] text-center text-[#fff] text-[14px] font-semibold">Udemy Inter. school</h2>
            <span className='w-[306px] mb-[16px] h-auto border-[#BDBDBD] border-[0.5px] block'></span>
            <ul className='w-[192px]  space-y-[8px] items-center justify-center mx-auto'>
                <Navlink url={"/"} title={"Dashboard"}>
                    <Dashboard />
                </Navlink>
                <Navlink url={"/teachers"} title={"Teachers"}>
                    <Teachers />
                </Navlink>
                <Navlink url={"/students"} title={"Students"}>
                    <Students />
                </Navlink>
                <Navlink url={"/billing"} title={"Billing"}>
                    <Billing />
                </Navlink>
                <Navlink url={"/settings"} title={"Settings and profile"}>
                    <Settings />
                </Navlink>
                <Navlink url={"/exams"} title={"Exams"}>
                    <Exams />
                </Navlink>
            </ul>
            <div className='flex w-[192px] px-[17px] py-[11px] items-center justify-between m-auto mt-[114px]'>
                <div className='flex items-center gap-[16px]'>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0002 8.33336H2.00016C1.36016 8.33336 0.833496 7.8067 0.833496 7.1667V4.95336C0.833496 4.50002 1.14681 4.04003 1.56681 3.87336L7.56681 1.47338C7.82015 1.37338 8.18018 1.37338 8.43351 1.47338L14.4335 3.87336C14.8535 4.04003 15.1668 4.50669 15.1668 4.95336V7.1667C15.1668 7.8067 14.6402 8.33336 14.0002 8.33336ZM8.00016 2.39338C7.9735 2.39338 7.94685 2.39335 7.93351 2.40001L1.94014 4.80004C1.90014 4.82004 1.8335 4.90669 1.8335 4.95336V7.1667C1.8335 7.26003 1.90683 7.33336 2.00016 7.33336H14.0002C14.0935 7.33336 14.1668 7.26003 14.1668 7.1667V4.95336C14.1668 4.90669 14.1068 4.82004 14.0602 4.80004L8.06018 2.40001C8.04685 2.39335 8.02683 2.39338 8.00016 2.39338Z" fill="white" />
                        <path d="M14.6668 15.6667H1.3335C1.06016 15.6667 0.833496 15.44 0.833496 15.1667V13.1667C0.833496 12.5267 1.36016 12 2.00016 12H14.0002C14.6402 12 15.1668 12.5267 15.1668 13.1667V15.1667C15.1668 15.44 14.9402 15.6667 14.6668 15.6667ZM1.8335 14.6667H14.1668V13.1667C14.1668 13.0733 14.0935 13 14.0002 13H2.00016C1.90683 13 1.8335 13.0733 1.8335 13.1667V14.6667Z" fill="white" />
                        <path d="M2.6665 13C2.39317 13 2.1665 12.7733 2.1665 12.5V7.83331C2.1665 7.55998 2.39317 7.33331 2.6665 7.33331C2.93984 7.33331 3.1665 7.55998 3.1665 7.83331V12.5C3.1665 12.7733 2.93984 13 2.6665 13Z" fill="white" />
                        <path d="M5.3335 13C5.06016 13 4.8335 12.7733 4.8335 12.5V7.83331C4.8335 7.55998 5.06016 7.33331 5.3335 7.33331C5.60683 7.33331 5.8335 7.55998 5.8335 7.83331V12.5C5.8335 12.7733 5.60683 13 5.3335 13Z" fill="white" />
                        <path d="M8 13C7.72667 13 7.5 12.7733 7.5 12.5V7.83331C7.5 7.55998 7.72667 7.33331 8 7.33331C8.27333 7.33331 8.5 7.55998 8.5 7.83331V12.5C8.5 12.7733 8.27333 13 8 13Z" fill="white" />
                        <path d="M10.6665 13C10.3932 13 10.1665 12.7733 10.1665 12.5V7.83331C10.1665 7.55998 10.3932 7.33331 10.6665 7.33331C10.9398 7.33331 11.1665 7.55998 11.1665 7.83331V12.5C11.1665 12.7733 10.9398 13 10.6665 13Z" fill="white" />
                        <path d="M13.3335 13C13.0602 13 12.8335 12.7733 12.8335 12.5V7.83331C12.8335 7.55998 13.0602 7.33331 13.3335 7.33331C13.6068 7.33331 13.8335 7.55998 13.8335 7.83331V12.5C13.8335 12.7733 13.6068 13 13.3335 13Z" fill="white" />
                        <path d="M15.3332 15.6667H0.666504C0.393171 15.6667 0.166504 15.44 0.166504 15.1667C0.166504 14.8934 0.393171 14.6667 0.666504 14.6667H15.3332C15.6065 14.6667 15.8332 14.8934 15.8332 15.1667C15.8332 15.44 15.6065 15.6667 15.3332 15.6667Z" fill="white" />
                        <path d="M8 6.66669C7.17333 6.66669 6.5 5.99335 6.5 5.16669C6.5 4.34002 7.17333 3.66669 8 3.66669C8.82667 3.66669 9.5 4.34002 9.5 5.16669C9.5 5.99335 8.82667 6.66669 8 6.66669ZM8 4.66669C7.72667 4.66669 7.5 4.89335 7.5 5.16669C7.5 5.44002 7.72667 5.66669 8 5.66669C8.27333 5.66669 8.5 5.44002 8.5 5.16669C8.5 4.89335 8.27333 4.66669 8 4.66669Z" fill="white" />
                    </svg>
                    <p className='text-[#FFFFFF] font-semibold text-[14px] leading-[17px]'>Features</p>
                </div>
               <img src={New} alt="new" />
            </div>
        </>
    )
}

export default NavBar
