import Image from 'next/image'
import Block from "./Block"
const Header1 = () => {
    return (
        <div className='flex justify-between border-b-2 border-gray-300 items-center h-20 px-10'>
            <Image src={"/logo.png"} alt='logo' width={200} height={200} className='w-28  h-18' />

            <div className=' h-full flex'>
                <Block title={"Become a membor"} para={"additional 0% off on stays."} />
                <Block title={"List your property"} para={"Start earning in 30 mins"} />
                <Block title={"0124-6201611"} para={"Call us to Book now"} />
                <Block title={"List your property"} para={"atart with me and my compont ."} />
                <div className="flex items-center p-3" >
                    <Image src={'/demo.png'} alt="demo" width={200} height={200} className="w-10 h-10 rounded-full" />
                    <h3 className='font-bold'>Login / Singup</h3>
                </div>
            </div>
        </div>
    )
}

export default Header1