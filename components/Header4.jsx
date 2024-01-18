'use client'

import Image from "next/image"

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-200 px-5">
        <div className="flex items-center">
            <Image src={"/fire.png"} 
            alt="fire" 
            width={200} 
            height={200} 
            className="w-20 h-20 py-2 px-2 rounded-full mr-5"/>

        <div className="text-xl">
            <p className="font-bold">Get access to exclusive deals</p>
            <p className="text-base text-gray-500">Only the best deals reach your inbox</p>
        </div>
        </div>
        <div className="flex">
            <input type="email" name="" className="px-3 rounded-lg py-2 mr-3 w-80 h-15 outline-none border border-gray-300" plac eholder="e.g. joen@gamil.com" />
            <button type="submit" className="w-40 rounded-lg h-11 bg-red-600 font-bold cursor-pointer text-white  ">Notify</button>
        </div>
    </div>
  )
}

export default Header4