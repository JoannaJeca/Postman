import { FaArrowRightLong } from "react-icons/fa6"
import data from "../Props/data.json"
import Happening from "../Props/Happening"

const WhatsHappening = () => {
  return (
    <div className="w-full min-h-[100% mb-[160px] flex justify-center">
        <div className="w-[76.5%]  min-h-[100vh]">
            <div>
                <h1 className="font-semibold text-[26px] mb-[9px]  text-gray-900">What's happening on Postman</h1>
                <p className=" text-gray-500 text-[15px] flex items-center">Browse the largest network of APIs and share what you build with developers across the planet. <span className="text-blue-800 hover:underline mx-1">Explore the Public API Network </span> <FaArrowRightLong size={14} style={{color:"blue"}} /></p>
            </div>
            <div className=" w-full flex justify-between min-h-full flex-wrap mt-[35px] mb-[50px]"> 
              {
                data?.map((props)=>(
                    <Happening img={props.img} title={props.title} desc={props.desc} sponsor={props.sponsor} eye={props.eye} view={props.view}/>
                ))
              }

            </div>
        </div>
    </div>
  )
}

export default WhatsHappening