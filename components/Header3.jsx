'use client'

const Header3 = () => {
  return (
    <div className='bg-gradient-to-r from-red-600 to-red-400 h-60'>
        <div className=" p-5">
            <h2 className='text-3xl text-white text-center  font-bold'>Over 174,000+ hotels and homes across 35+ countries</h2>
            <div className="grid grid-cols-5 my-5 mx-20">
                <input type="text" name="" placeholder='Search...' className=' h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2' id="" />
                <input type="text" name="" placeholder='Search...' className=' h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1' id="" />
                <input type="text" name="" placeholder='Search...' className=' h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1' id="" />
                <button type='submit' className='h-16 px-3 py-2 col-span-1 bg-green-400
                 hover:cursor-pointer hover:bg-green-600 text-white text-xl'>Search</button>
            </div>
            <div className="flex mx-20 my-5 font-bold">
            <button type='submit' className='h-16 px-3 py-2 
                 hover:cursor-pointer  text-white  mr-5'>Continue your Search</button>
                    <button type='submit' className='h-16 px-3 py-2 
                 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-300  rounded-2xl'>Home stay in India hotels</button>
            </div>


        </div>
        
        </div>
  )
}

export default Header3