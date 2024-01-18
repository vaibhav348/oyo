import Image from "next/image"

const Block = ({title, para}) => {
  return (
    <div className='border-r border-gray-200 w-50 h-full flex items-center px-2'>
        <Image src={'/demo.png'} alt="demo" width={200} height={200} className="w-10 h-10 rounded-full" />
    <div>
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-gray-400 text-xs line-clamp-1">{para}</p>
    </div>
    </div>
  )
}

export default Block