'use client'

const Header2 = () => {
const List = [
    {
        name:"Banglore"
    },
    {
        name:"Mumbai"
    },
    {
        name:"Jaipur"
    },
    {
        name:"Lochnow"
    },
    {
        name:"Pune"
    },
    {
        name:"Delhi"
    },
    {
        name:"Culcutta"
    },
    {
        name:"Hayderabad"
    },
]

    return (
    <div className='flex px-10 py-1 bg-gray-100 justify-between'>
        {
            List.map((e)=>(
                <span key={e.name}>
                    {
                        e.name
                    }
                </span>
            ))
        }
        </div>
  )
}

export default Header2