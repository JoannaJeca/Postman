import { BsWindows } from "react-icons/bs";
import { GrApple } from "react-icons/gr"
import { FaLinux } from "react-icons/fa6";
import {TypeAnimation} from "react-type-animation"

const Hero = () => {
  return (
    <div className="mx-[30px] h-[50vh] mb-[150px]  flex items-center justify-center">
       
            <div className=" w-[49%] h-[100%] flex items-end justify-end">
                <div className="w-[73%] h-[60%]">
                    <div>
                        
                        <h1 className="text-[38px] font-semibold">
                            <TypeAnimation sequence={[
                            "Build", 1000,
                            "Test", 1000,
                            "Debug", 1000,
                            "Document", 1000,
                            "Monitor", 1000,
                            "Publish", 1000
                        ]}
                        speed={40}
                        deletionSpeed={40}
                        style={{fontFamily:"monospace"}}
                        repeat={2}/>
                        </h1>
                        <h2 className="text-[28px] font-semibold" style={{fontFamily:"monospace"}}>
                            APIs together
                        </h2>
                    </div>
                    <div className="text-[17.5px] mr-5">Over 25 million developers use Postman. Get started by signing up or downloading the desktop app.</div>

                    <div className="w-[93%] border border-orange-500 rounded-md flex my-[15px]">
                       <input className="h-[100%] outline-blue-700  flex-1 rounded-tl-md rounded-bl-md pl-[10px] pt-[5px] bg-transparent" placeholder="jsmith@example.com"/>
                       <div className=" bg-orange-500 w-[120px] h-[50] p-[7px] rounded-br-md rounded-tr-md flex justify-center text-white text-[13.5px] items-center font-[500] hover:bg-orange-600">Sign Up for Free</div>
                    </div>


                    <div>
                        <p className="text-gray-600 text-[13px] font-[500]">Download the desktop app for</p>
                        <div className="w-[120px] flex justify-between mt-[10px]">
                            <BsWindows size={23} color="grey"/>
                            <GrApple size={25} color="grey"/>
                            <FaLinux size={24} color="grey"/>
                        </div>
                    </div>
                </div>
            </div>



            <div className=" w-[75%] h-[85%] self-start"><img src="https://www.postman.com/_wp-assets/home/21bd14bd629f14c1.png" alt="" width="100%" height="80%" style={{objectFit:'contain'}}/></div>
    </div>
  )
}

export default Hero