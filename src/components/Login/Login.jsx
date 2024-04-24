import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

function Login({ setToken }) {
  const newData = JSON.parse(window.localStorage.getItem("newToken")) || { newLogin: "Mirolim" }
  const SubmitLOgin = (evt) => {
    evt.preventDefault()
    const data = {
      login: evt.target.login.value,
      password: evt.target.password.value
    }
    if (data.login == newData.newLogin) {
      toast.success("Muvaffaqiyatli kirdingiz!")
    }
    else {
      toast.error("Ma'lumotlar mos emas! \n Iltimos ro'yhatdan o'ting")
    }
    setTimeout(() => {
      setToken(data);
    }, 1000)
    window.localStorage.setItem("token", JSON.stringify(data))
  }
  return (
    <div className='w-full h-[100vh] bg-[#fcfafa] pt-[100px]  overflow-auto'>
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className='text-[36px] text-center text-[#4F4F4F] font-bold mb-[53px]'>Welcome, Log into you account</h1>
      <form onSubmit={SubmitLOgin} className='w-[512px] m-auto bg-[#ffffff] px-[132px] pt-[72px] pb-[39px]'>
        <p className='text-[#667085] text-center mb-[14px] text-[16px] font-medium'>It is our great pleasure to have you on board! </p>
        <div className='flex flex-col'>
          <label>
            <input className='py-[12px] w-[248px] pl-[13px] border-[0.5px] border-[#A7A7A7] rounded-[4px] mb-[20px] outline-none placeholder:text-[#8A8A8A] font-medium' required autoComplete='off' name='login' type="text" placeholder='Enter your login' />
          </label>
          <label>
            <input className='py-[12px] w-[248px] pl-[13px] border-[0.5px] border-[#A7A7A7] rounded-[4px] mb-[20px] outline-none placeholder:text-[#8A8A8A] font-medium' required autoComplete='off' name='password' type="password" placeholder='Enter Password' />
          </label>
        </div>
        <button className='w-[248px] rounded-[4px] bg-[#2D88D4] py-[11px] border-[#A7A7A7] border-[0.5px] text-center text-[14px] text-[#FFFFFF] font-bold mb-[14px]'>Login</button>
        <Link to={'/sign-up'} className='mx-auto text-center block text-[#2D88D4] text-[12px] font-bold leading-[24px]'>Sign up</Link>
      </form>
    </div>
  )
}

export default Login
