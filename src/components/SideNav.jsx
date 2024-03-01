import React from 'react';
import { HiOutlineInbox, HiOutlineMail, HiOutlineStar, HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import { CiLogout } from "react-icons/ci";

const SideNav = () => {
  return (
    <nav className="rounded-md w-72 h-screen flex flex-col justify-between">
      <div className="bg-blue-50 h-full">
        <div className="flex justify-center py-10 shadow-sm pr-4">
          <HiOutlineMail className="h-14 w-14" />
          <div className="pl-2">
            <p className="text-2xl font-bold">IronMail</p>
            <span className="text-xs block">Check your Inbox!</span>
          </div>
        </div>
        <div className="pl-10 flex-grow">
          <ul className="space-y-8 pt-10">
            <li className="flex space-x-4 items-center hover:text-blue-500 cursor-pointer">
              <HiOutlineInbox className="h-6 w-6" />
              <a href="#">Inbox</a>
            </li>
            <li className="flex space-x-4 items-center hover:text-blue-500 cursor-pointer">
              <HiOutlineMail className="h-6 w-6" />
              <a href="#">Sent</a>
            </li>
            <li className="flex space-x-4 items-center hover:text-blue-500 cursor-pointer">
              <HiOutlineStar className="h-6 w-6" />
              <a href="#">Starred</a>
            </li>
            <li className="flex space-x-4 items-center hover:text-blue-500 cursor-pointer">
              <HiOutlinePencilAlt className="h-6 w-6" />
              <a href="#">Draft</a>
            </li>
            <li className="flex space-x-4 items-center hover:text-blue-500 cursor-pointer">
              <HiOutlineTrash className="h-6 w-6" />
              <a href="#">Trash</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white flex items-center space-x-4 pl-10 pb-10 hover:text-blue-500 cursor-pointer">
        <CiLogout className="h-6 w-6" />
        <a href="#">Logout</a>
      </div>
    </nav>
  );
}

export default SideNav;
