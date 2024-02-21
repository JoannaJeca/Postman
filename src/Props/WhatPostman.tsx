import {FC} from 'react'

interface iProps{
    img:string,
    theme:string,
    desc:string
}

const WhatPostman:FC<iProps> = ({img, theme, desc}) => {
  return (
    <div>
        <div className="w-[280px] h-[200px] p-[16px] border cursor-pointer hover:border-gray-300 rounded-sm hover:shadow-sm">
                    <div className='w-[40px] h-[40px] '>
                        <img alt="" src={img} width="100%"/>
                    </div>
                    <h2 className="font-[600] hover:text-blue-700 my-[10px]">{theme}</h2>
                    <div className="text-[13px] text-gray-500">{desc}</div>
                </div>
    </div>
  )
}

export default WhatPostman