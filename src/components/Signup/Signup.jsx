import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Signup({ setSignUpdate }) {
  const navigate = useNavigate()
  const SubmitSignUp = (evt) => {
    evt.preventDefault()
    const data = {
      newLogin: evt.target.newLogin.value,
      newPassword: evt.target.newPassword.value
    }
    toast.success("Ma'lumotlar yangilandi!")
    setTimeout(() => {
      setSignUpdate(data)
      navigate("/")
    }, 1000);
    window.localStorage.setItem("newToken", JSON.stringify(data))
  }
  return (
    <div className='w-full h-[100vh] bg-[#fcfafa] pt-[100px] overflow-auto'>
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className='text-[36px] text-center text-[#4F4F4F] font-bold mb-[53px]'>Welcome, Sign up</h1>
      <form onSubmit={SubmitSignUp} className='w-[512px] m-auto bg-[#ffffff] pl-[135px] pr-[129px] pt-[72px] pb-[100px]'>
        <p className='text-[#667085] text-center mb-[14px] text-[16px] font-medium'>It is our great pleasure to have you on board! </p>
        <div className='flex flex-col'>
          <label>
            <input className='py-[12px] w-[248px] pl-[13px] border-[0.5px] border-[#A7A7A7] rounded-[4px] mb-[20px] outline-none placeholder:text-[#8A8A8A] font-medium' required autoComplete='off' name='login' type="email" placeholder='Enter your Email' />
          </label>
          <label>
            <input className='py-[12px] w-[248px] pl-[13px] border-[0.5px] border-[#A7A7A7] rounded-[4px] mb-[20px] outline-none placeholder:text-[#8A8A8A] font-medium' required autoComplete='off' name='newLogin' type="text" placeholder='Create your Login' />
          </label>
          <label>
            <input className='py-[12px] w-[248px] pl-[13px] border-[0.5px] border-[#A7A7A7] rounded-[4px] mb-[20px] outline-none placeholder:text-[#8A8A8A] font-medium' required autoComplete='off' name='newPassword' type="password" placeholder='Create your Password' />
          </label>
        </div>
        <button className='w-[248px] rounded-[4px] bg-[#2D88D4] py-[11px] border-[#A7A7A7] border-[0.5px] text-center text-[14px] text-[#FFFFFF] font-bold mb-[14px]'>Sign up</button>
      </form>
    </div>
  )
}

export default Signup
