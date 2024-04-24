import React from 'react';
import { NavLink } from "react-router-dom";
import vector from "../../assets/images/vector.svg";

function Navlink({ url, children, title }) {
  return (
    <NavLink
      className={'text-[#fff] w-[192px] py-[11px] pl-[16px] text-[14px] relative  flex space-x-[16px] rounded-[4px] items-center'}
      to={url}
      isActive={(match, location) => {
        return match !== null;
      }}
    >
      {children}
      <span className='leading-[23px] font-semibold'>{title}</span>
      <img src={vector} alt="vector" width={8} height={4} className="image" />
    </NavLink>
  );
}

export default Navlink;
