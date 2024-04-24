import React from 'react'

function Modal({ children, setShowModal, showModal }) {
  const closeModal = (evt) => {
    if (evt.target.id == "wrapper") {
      setShowModal(false)
    }
  }
  return (
    <div onClick={closeModal} id="wrapper" className={`fixed top-0 bottom-0 right-0 left-0 backdrop-blur-md transition-[0.5s] ${showModal ? "" : "scale-0"}`}>
      <div className='w-[400px] bg-[#152259] p-[30px] rounded-lg mx-auto mt-[250px]'>
        {children}
      </div>
    </div>
  )
}

export default Modal
