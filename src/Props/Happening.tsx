import {FC} from "react"
import { FaLink } from "react-icons/fa"
import { IoEyeOutline } from "react-icons/io5"
import { PiSquaresFourLight } from "react-icons/pi"

interface iProps{
img:string,
title:string,
desc:string,
sponsor:string,
eye:string,
view:string
}

const Happening:FC<iProps> = ({img, title,desc,sponsor,eye, view}) => {
  return (
    <div className=" ">
      <div className="w-[365px] h-[170px] border p-[10px] flex mr-[20px] justify-between rounded-sm hover:bg-gray-100 cursor-pointer">
                <div className="w-[40px] h-[40px] bg-slate-400">
                    <img src={img}/>
                </div>

                <div className="w-[84.5%] h-[100%]">
                    <h3 className="font-[649] w-[100%] flex justify-between"><span className="hover:text-blue-600 cursor-pointer">{title}</span>
                    <FaLink style={{color:"gray", marginTop:"6px"}} size={10}/></h3>
                    <p className="w-[100%] h-[60px] text-[13px] flex items-center">{desc}</p>
                    <div className="flex w-[100%] mt-[7px] wrap min-h-[27px] ">
                    <div className="flex  text-gray-700">
                        <PiSquaresFourLight size={21}/>
                        <p className="text-[13px] ml-[3px] mr-5">Workspace</p>
                    </div>
                    <div className="text-[13px] text-gray-700">{sponsor}</div>
                </div>
                <div className="flex w-[100%] wrap h-[35px] ">
                    <div className="flex text-gray-700 ">
                        <IoEyeOutline size={15} style={{marginTop:"3.5px", marginLeft:"2px"}} />
                        <p className="text-[13px] ml-[7px] mr-5">{eye}</p>
                    </div>
                    <div className="text-[13px] text-gray-700">{view}</div>
                </div>
                </div>
                
              </div>
    </div>
  )
}

export default Happening