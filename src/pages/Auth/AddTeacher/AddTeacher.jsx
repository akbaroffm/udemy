import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Modal from '../../../components/Modal/Modal'

function AddStudent({ dashboard, setDashboards }) {
  const navigate = useNavigate()
  const [saveLocal, setSaveLocal] = useState(false)
  const [imgUrl, setImgUrl] = useState(null)
  const chooseImgChange = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]))
  }

  const SubmitStudent = (e) => {
    e.preventDefault()
    const data = {
      id: dashboard.length ? dashboard[dashboard.length - 1].id + 1 : 1,
      avatarImg: imgUrl,
      name: e.target.name.value,
      subject: e.target.subject.value,
      classGroup: e.target.classGroup.value,
      email: e.target.email.value,
      about: e.target.about.value,
      age: e.target.age.value,
      gender: e.target.gender.value
    }
    if (imgUrl == null) {
      toast.error("Rasm tanlash shart !")
    }
    else {
      setDashboards([...dashboard, data])
      toast.success("Muvoffiqiyatli saqlandi!")
      setTimeout(() => {
        navigate("/teachers")
      }, 1000);
    }
    setSaveLocal(!saveLocal)
  }
  useEffect(() => {
    window.localStorage.setItem("dashboard", JSON.stringify(dashboard))
  }, [saveLocal])

  const [showModal, setShowModal] = useState(false)

  const ModalLogout = () => {
    setShowModal(true)
  }
  return (
    <>
      <div className='pt-[19px] pb-[42px] pl-[42px]'>
        <form onSubmit={SubmitStudent} className=' bg-[#fff]'>
          <div className='flex items-center justify-end pr-[69px] mb-[4px] gap-[3px] pb-[21px]'>
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
          <div className='flex items-center justify-between  mb-[24px] pr-[99px]'>
            <h2 className='text-[#4F4F4F] text-[20px] font-medium leading-[24px]'>Add teacher</h2>
            <button type='submit' className='text-[14px] text-[#fff] font-semibold text-center bg-[#509CDB] rounded-[4px] px-[14px] py-[12px]'>Save</button>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
          <div className='flex justify-between pr-[175px]'>
            <div className='w-[47%]'>
              <label className='flex flex-col mb-[36px]'>
                <span className='leading-[17px] text-[#8A8A8A] font-medium text-[14px]'>Full Name</span>
                <input className='focus:border-[#152259] transition-all pl-[10px] py-[12px] mt-[5px] placeholder:text-[#8A8A8A] text-[14px] font-medium w-[407px] border-[#A7A7A7] border-[0.5px] outline-none rounded-md ' type="text" name='name' autoComplete='off' required placeholder='Full Name' />
              </label>
              <label className='flex flex-col mb-[36px]'>
                <span className='leading-[17px] text-[#8A8A8A] font-medium text-[14px]'>Email address</span>
                <input className='focus:border-[#152259] transition-all pl-[10px] py-[12px] mt-[5px] placeholder:text-[#8A8A8A] text-[14px] font-medium w-[407px] border-[#A7A7A7] border-[0.5px] outline-none rounded-md ' type="email" name='email' autoComplete='off' required placeholder='Email address' />
              </label>
              <label className='flex flex-col mb-[36px]'>
                <span className='leading-[17px] text-[#8A8A8A] font-medium text-[14px]'>Subject</span>
                <input className='focus:border-[#152259] transition-all pl-[10px] py-[12px] mt-[5px] placeholder:text-[#8A8A8A] text-[14px] font-medium w-[407px] border-[#A7A7A7] border-[0.5px] outline-none rounded-md ' type="text" name='subject' autoComplete='off' required placeholder='Subject' />
              </label>
              <label className='flex flex-col mb-[36px]'>
                <span className='leading-[17px] text-[#8A8A8A] font-medium text-[14px]'>About</span>
                <textarea className="focus:border-[#152259] transition-all pl-[10px] mt-[5px] placeholder:text-[#8A8A8A] text-[14px] font-medium w-[407px] h-[172px] border-[#A7A7A7] border-[0.5px] pt-[13px] pb-[142px] outline-none rounded-md " name="about" cols="30" rows="10" autoComplete='off' required placeholder='About'></textarea>
              </label>
            </div>
            <div className='w-[47%]'>
              <label className='flex flex-col mb-[36px]'>
                <span className='leading-[17px] text-[#8A8A8A] text-[14px] font-medium'>Class</span>
                <select name="classGroup" className='focus:border-[#152259] transition-all pl-[16px] pr-[10px] py-[12px] mt-[5px] w-[407px] text-[#8A8A8A] border-[#A7A7A7] border-[0.5px] outline-none rounded-md '>
                  <option value={1}>REACT N48</option>
                  <option value={2}>REACT N49</option>
                  <option value={3}>REACT N50</option>
                  <option value={4}>REACT N51</option>
                  <option value={5}>REACT N52</option>
                  <option value={6}>REACT N53</option>
                </select>
              </label>
              <label className='flex flex-col mb-[36px]'>
                <span className='leading-[17px] text-[#8A8A8A] text-[14px] font-medium'>Gender</span>
                <select name="gender" className='focus:border-[#152259] transition-all pl-[16px] pr-[10px] py-[12px] mt-[5px] w-[407px] text-[#8A8A8A] border-[#A7A7A7] border-[0.5px] outline-none rounded-md '>
                  <option>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
              <label className='flex flex-col mb-[50px]'>
                <span className='leading-[17px] text-[#8A8A8A] font-medium text-[14px]'>Age</span>
                <input className='focus:border-[#152259] transition-all pl-[10px] py-[12px] mt-[5px] placeholder:text-[#8A8A8A] text-[14px] font-medium w-[407px] border-[#A7A7A7] border-[0.5px] outline-none rounded-md ' type="number" name='age' autoComplete='off' required placeholder='Age' />
              </label>
              <label className='flex flex-col mb-3'>
                <span className='text-[#4F4F4F] w-[40%] text-[18px] inline-block font-semibold'>Import Img</span>
                <input onChange={chooseImgChange} className='focus:border-[#152259] transition-all p-2 scale-0 opacity-0 outline-none rounded-md w-full' type="file" />
                {imgUrl ? <img src={imgUrl} alt="Choose img" width={70} height={70} /> : ""}
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddStudent
