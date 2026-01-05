"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import { MdLogout, MdOutlineChat, MdSettings } from "react-icons/md";
import { signOut } from "next-auth/react";

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  // derive classname instead of storing it in state to avoid render loops
  const data = useSession();
  const baseClass =
    "h-[90vh] flex flex-col rounded-2xl py-16  px-5 bg-slate-800/80  transition-all duration-300 ease-in-out";
  const classname = expanded
    ? baseClass + " w-48"
    : baseClass + " w-16  items-center transition-all duration-700 ease-in-out";

  return (
    <div
      className={`${classname} fixed top-10 overflow-hidden left-10 backdrop-blur-md shadow-lg z-50 gap-10`}
    >
      {expanded ? (
        <GoSidebarExpand
          size={30}
          className="text-white mb-10 cursor-pointer"
          onClick={() => {
            setExpanded(!expanded);
          }}
        />
      ) : (
        <GoSidebarCollapse
          size={30}
          className="text-white mb-10 cursor-pointer"
          onClick={() => {
            setExpanded(!expanded);
          }}
        />
      )}
      {data.data?.user?.image && (
        <div className="flex gap-2 items-center text-gray-200">
          <Image
            src={data.data?.user?.image}
            height={40}
            width={40}
            alt="User Avatar"
            className="rounded-full"
          />
          {expanded ? (
            <h1 className="text-nowrap ">{data.data.user.name}</h1>
          ) : null}
        </div>
      )}
      <div className="flex flex-col justify-evenly gap-10">
        <div className="flex gap-2  text-gray-200">
          <MdOutlineChat
            size={30}
            className="cursor-pointer text-white transition-all duration-300 ease-in-out"
          />
          {expanded ? <h1>Chats</h1> : null}
        </div>
        <div className="flex gap-2  text-gray-200">
          <IoMdContacts
            size={30}
            className="cursor-pointer text-white transition-all duration-300 ease-in-out"
          />
          {expanded ? <h1>Contacts</h1> : null}
        </div>
        <div className="flex gap-2  text-gray-200">
          <MdSettings
            size={30}
            className="cursor-pointer text-white transition-all duration-300 ease-in-out"
          />
          {expanded ? <h1>Settings</h1> : null}
        </div>
      </div>
      <div className="flex gap-2  mt-auto text-gray-200" onClick={() => {signOut( {callbackUrl:"/signup"}) }}>
        <MdLogout
          size={30}
          className="cursor-pointer text-white transition-all duration-300 ease-in-out"
        />
        {expanded ? <h1>Logout</h1> : null}
      </div>
    </div>
  );
}

export default Navbar;
