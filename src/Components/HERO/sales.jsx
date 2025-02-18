export default function Sales(){
    const gainsData = [
        { id: 1, user: 'BHQ...CKC', token: '$WYNN', gain: '+2,837%' },
        { id: 2, user: 'HXF...JMX', token: '$HOPPY', gain: '+1,578%' },
        { id: 3, user: 'FEC...YAS', token: '$BONG', gain: '+1,240%' },
      ];
    return (
        <div className="h-max bg-transparent p-4 rounded-lg shadow-md max-w-sm absolute left-0 top-[48rem] backdrop-blur-xl ">

        <div className="flex items-center space-x-2 mb-3">
            <span className="text-white text-sm tracking-wide flex font-bold "><img src="" alt="" /> <img src="/diamond.svg" className="mr-4" /> GAINS WITH MEVVBOT</span>
        </div>
        <ul className="space-y-2">
            {gainsData.map(({ id, user, token, gain }) => (
            <li 
                key={id} 
                className={`flex items-center justify-between text-white text-sm border-b pb-1 border-[#ffffff1a] ${id===2&& "opacity-[70%]"} ${id===3&& "opacity-[40%]"}`}
            >
                <span>
                <span className="text-white">{user}</span> SOLD <span className="text-white">{token}</span> FOR
                </span>
                <span className="text-teal-400 ">{gain}</span>
            </li>
            ))}
        </ul>
    </div>
    )
}