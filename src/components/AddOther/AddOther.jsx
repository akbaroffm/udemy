import React from 'react'

function AddOther({src, alt, title, text}) {
    return (
        <div className='flex gap-[20px] items-start'>
            <img src={src} alt={alt} width={36} height={36}/>
            <div className='flex flex-col  w-[520px] space-y-[16px]'>
                <h2 className='text-[24px] text-[#4F4F4F] leading-[29px] font-medium'>{title}</h2>
                <p className='text-[#4F4F4F] text-[14px] leading-[18px] font-normal'>{text}</p>
            </div>
        </div>
    )
}

export default AddOther
