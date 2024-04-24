import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Modal from "../../components/Modal/Modal"
import { Link, useNavigate } from 'react-router-dom'
import koala from "../../assets/images/koala.png"

function Teachers({ dashboard, setDashboards }) {
  { dashboard, setDashboards }

  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const SearchInput = (evt) => {
    const value = evt.target.value
    const localstudent = JSON.parse(window.localStorage.getItem("dashboard"))
    let data = localstudent.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    setDashboards(data)

  }
  const ModalLogout = () => {
    setShowModal(true)
  }
  return (
    <>
      <div className='flex items-center justify-end pt-[19px] pr-[69px] mb-[4px] gap-[3px] pb-[21px]'>
        <Toaster position="top-center" reverseOrder={false} />
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
      <div className='flex items-center justify-between pl-[38px] mb-[14px] pr-[99px]'>
        <h2 className='text-[#4F4F4F] text-[20px] font-medium leading-[24px]'>Teachers</h2>
        <Link to={'/add'} className='text-[14px] text-[#fff] font-semibold text-center bg-[#509CDB] rounded-[4px] px-[14px] py-[12px]'>Add Teachers</Link>
      </div>
      <div className='pl-[38px] mb-[11px] pr-[99px]'>
        <label className='bg-[#FCFAFA] flex  items-center'>
          <svg className='relative ml-[16px]' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7429 10.843C12.7112 9.52169 13.1449 7.88349 12.9572 6.25615C12.7695 4.62881 11.9743 3.13234 10.7307 2.06613C9.48701 0.999923 7.88665 0.442605 6.24973 0.505679C4.61282 0.568752 3.06008 1.24756 1.90217 2.40631C0.744249 3.56505 0.0665484 5.11828 0.00464653 6.75524C-0.0572553 8.39219 0.501207 9.99216 1.56831 11.235C2.6354 12.4779 4.13244 13.2721 5.75992 13.4586C7.38739 13.6451 9.02528 13.2102 10.3459 12.241H10.3449C10.3749 12.281 10.4069 12.319 10.4429 12.356L14.2929 16.206C14.4804 16.3936 14.7348 16.4991 15 16.4992C15.2653 16.4993 15.5198 16.394 15.7074 16.2065C15.895 16.019 16.0005 15.7646 16.0006 15.4994C16.0007 15.2341 15.8954 14.9796 15.7079 14.792L11.8579 10.942C11.8221 10.9058 11.7837 10.8724 11.7429 10.842V10.843ZM12.0009 6.999C12.0009 7.72127 11.8586 8.43647 11.5822 9.10376C11.3058 9.77105 10.9007 10.3774 10.39 10.8881C9.87926 11.3988 9.27295 11.8039 8.60566 12.0803C7.93837 12.3567 7.22317 12.499 6.5009 12.499C5.77863 12.499 5.06343 12.3567 4.39614 12.0803C3.72885 11.8039 3.12253 11.3988 2.61181 10.8881C2.10109 10.3774 1.69596 9.77105 1.41956 9.10376C1.14316 8.43647 1.0009 7.72127 1.0009 6.999C1.0009 5.54031 1.58036 4.14136 2.61181 3.10991C3.64326 2.07846 5.04221 1.499 6.5009 1.499C7.95959 1.499 9.35853 2.07846 10.39 3.10991C11.4214 4.14136 12.0009 5.54031 12.0009 6.999Z" fill="#8A8A8A" />
          </svg>
          <input onChange={SearchInput} className='bg-[#FCFAFA] w-full py-[15px] pl-[16px] px-[16px] outline-none' type="search" placeholder='Search for a student by name or email' />
        </label>
      </div>

      {dashboard.length === 0 ? (
        <div className=' pt-[30px] pr-[104px] pl-[38px] pb-[105px]'>
          <div className='flex bg-[#FCFAFA] flex-col pt-[14px] pr-[19px] pl-[306px] pb-[35px]'>
            <img src={koala} alt="Koala img" width={340} height={255} />
            <strong className='text-[#4F4F4F] text-[28px] font-semibold leading-[34px] mt-[9px] mb-[4px]'>No Teachers at this time</strong>
            <p className='text-[#4F4F4F] text-[14px] leading-[17px] font-medium'>Teachers will appear here after they enroll in your school.  </p>
            <div className='flex items-center justify-end'>
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
          </div>
        </div>
      )
        :
        (
          <div className='pl-[32px] pr-[104px]'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='bg-white text-[12px] text-[#424242] font-bold py-[16px] pl-[8px] w-[180px] text-start'>Name</th>
                  <th className='bg-white text-[12px] text-[#424242] font-bold py-[16px] pl-[8px] text-start'>Subject</th>
                  <th className='bg-white text-[12px] text-[#424242] font-bold py-[16px] pl-[8px] text-start'>Class</th>
                  <th className='bg-white text-[12px] text-[#424242] font-bold py-[16px] pl-[8px] text-start w-[297px]'>Email address</th>
                  <th className='bg-white text-[12px] text-[#424242] font-bold py-[16px] pl-[8px] text-start'>Gender</th>
                  <th className='bg-white text-[12px] text-[#424242] font-bold py-[16px] pl-[8px] text-start'>Action</th>
                </tr>
              </thead>
              <tbody>
                {dashboard.map(item => (
                  <tr id="student-row" className='even:bg-[#ebf6ffa0] hover:bg-blue-100' key={item.id}>
                    <td className='text-[12px] text-[#4F4F4F] font-medium py-[16px] pl-[8px] text-start flex items-center gap-2'>
                      <img src={item.avatarImg} alt="Student img" width={40} height={40} />  {item.name}

                    </td>
                    <td className='text-[12px] text-[#4F4F4F] font-medium py-[16px] pl-[8px] text-start'>{item.subject}</td>
                    <td className='text-[12px] text-[#4F4F4F] font-medium py-[16px] pl-[8px] text-start'>
                      {item.classGroup == "1" ? "REACT N48" : ""}
                      {item.classGroup == "2" ? "REACT N49" : ""}
                      {item.classGroup == "3" ? "REACT N50" : ""}
                      {item.classGroup == "4" ? "REACT N51" : ""}
                      {item.classGroup == "5" ? "REACT N52" : ""}
                      {item.classGroup == "6" ? "REACT N53" : ""}
                    </td>
                    <td className='text-[12px] text-[#4F4F4F] font-medium py-[16px] pl-[8px] text-start'>{item.email}</td>
                    <td className='text-[12px] text-[#4F4F4F] font-medium py-[16px] pl-[8px] text-start'>{item.gender}</td>
                    <td className='text-[12px] text-[#4F4F4F] font-medium py-[16px] pl-[8px] text-start space-x-1'>
                      <button className='bg-green-400 text-[12px] py-[4px] px-2 text-white font-medium rounded-md' onClick={() => navigate(`more/${item.id}`)}>More</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    </>
  )
}

export default Teachers
