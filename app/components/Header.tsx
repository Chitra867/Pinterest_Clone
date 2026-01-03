"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { HiBell, HiChat, HiSearch } from "react-icons/hi";
export default function Header() {
  const { data: session } = useSession();

  console.log(session);
  return (
    <div className="flex gap-3 ms:gap-2 items-center p-6">
      <Image
        src="/pintrest.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
      <button className="bg-black text-white p-2 px-4 rounded-full hidden md:block">
        Home
      </button>
      <button className="font-semibold p-2 px-4 rounded-full">Create</button>
      <div className="bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[25px] text-gray-500 md:hidden" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
      <HiBell className="text-[25px] md:text-[40px] text-gray-500 cursor-pointer" />
      <HiChat className="text-[25px] md:text-[40px] text-[40px] text-gray-500 cursor-pointer" />
     {session?.user? <Image
        src={session?.user?.image}
        alt="profile"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />:
      <button
        className="font-semibold p-2 px-4 rounded-full"
        onClick={() => signIn()}
      >
        Login
      </button>}
    </div>
  );
}
