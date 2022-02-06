import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Avatar from './Utils/Avatar';
import userImage from '../assets/user.jpg'
import { navItems, socials } from '../constants/list';
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate()
  return (
    <div className="h-18 flex items-center sticky top-0 z-10 bg-slate-100 w-full">
      <div className="flex flex-[2] justify-center">
        {socials.map(({ id, Icon }) => {
          return (
            <div key={id} className="mx-2">
              <Icon size={25} />
            </div>
          )
        })}
      </div>
      <div className="flex flex-[4] justify-center">
        {navItems.map((item) => {
          return (
            <div onClick={()=> navigate(item.path)} key={item.id} className="mx-3 hover:text-slate-300">
              <h2 className="text-xl cursor-pointer">{item.title}</h2>
            </div>
          )
        })}
      </div>
      <div className="flex items-center flex-[2] justify-center">
        <Avatar imgSrc={userImage} />
        <BiSearch size={22} />
      </div>
    </div>
  )
}

export default Topbar
