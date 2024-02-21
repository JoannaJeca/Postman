import { FaArrowRightLong } from 'react-icons/fa6'
import { IoEyeOutline } from 'react-icons/io5'
import { PiSquaresFourLight } from 'react-icons/pi'
import { AiOutlineDelete } from "react-icons/ai";
import { IoGitNetworkOutline } from "react-icons/io5";

const Spotlight = () => {
  return (
    
    <div className="w-full flex justify-center  ">
        <div className="w-[76.5%] flex h-[100%] flex-col items-center ">
           <div className=' min-w-[100%] mb-[55px]'>
                <h1 className="font-semibold text-[26px] mb-[6px]  text-gray-900">In the spotlight</h1>
                <p className=" text-gray-500 text-[15px] flex items-center w-[100%]">The best APIs, collections, and workspaces handpicked by Postman. <span className="text-blue-800 hover:underline mx-1 cursor-pointer"> See what more is in the spotlight </span> <FaArrowRightLong size={14} style={{color:"blue", marginTop:"2px"}} /></p>
            </div>
            <div className='w-full flex justify-between'>
              <div className=' w-[49%] min-h-[90%]'>
              <div className='min-w-[100%] mb-[50px]'>
                <h1 className="font-semibold text-[18px] mb-[5px]  text-gray-900">Trending APIs this week</h1>
                <p className=" text-gray-500 text-[14px] items-center min-w-[100%]">There's an API for that: discover the APIs, workspaces and collections the Postman community is creating, viewing and forking. <a className="text-blue-800 flex w-[30%] hover:underline mr-2 cursor-pointer m-none self-center"> View complete list  <FaArrowRightLong size={12} style={{color:"blue", marginTop:"5px", marginLeft:"5px"}} /> </a></p>
            </div>
            <div className="w-full h-[155px] border-y p-[16px] pr-[25px] flex mr-[20px] justify-between rounded-sm hover:bg-gray-100 cursor-pointer">
                <div className="w-[40px] h-[40px] bg-slate-400">
                    <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629887344/team/cce3460089092278711346c5a8da9d3b85714361377fc9875a860df8fa6102a3"/>
                </div>

                <div className="w-[87%] h-[100%]">
                    <h3 className="font-[649] w-[100%] mr-[2px] flex"><span className="hover:text-blue-600 cursor-pointer"> Datadog API Collection</span>
                    {/* <FaLink style={{color:"gray", marginTop:"6px", marginLeft:"1px"}} size={10}/> */}
                    </h3>
                    <p className="w-[100%] h-[60px] text-[13px] flex items-center">This is the latest collection from the Datadog REST API. Fork it to your workspace to try Datadog API requests.</p>
                    <div className="w-full flex mt-[15px]">
                    <div className="flex min-h-[27px] ">
                    <div className="flex  text-gray-700">
                        <AiOutlineDelete size={21}/>
                        <p className="text-[13px] ml-[3px] mr-4">Collections</p>
                    </div>
                    <div className="text-[13px] text-gray-700 mr-2">By Datadog</div>
                    <div className="flex  text-gray-700">
                        <IoGitNetworkOutline size={15}  style={{marginTop:"3.5px", marginLeft:"2px"}}/>
                        <p className="text-[13px] ml-[3px] mr-3">3k+ forks</p>
                    </div>
                </div>
                <div className="flex min-h-[26px] ">
                    <div className="flex text-gray-700 ">
                        <IoEyeOutline size={15} style={{marginTop:"3.5px", marginLeft:"2px"}} />
                        <p className="text-[13px] ml-[7px] mr-2">3k+ watchers</p>
                    </div>
                    <div className="text-[13px] text-gray-700">10k+ views</div>
                </div>
                    </div>
                    
                </div>
                
              </div>

              <div className="w-full h-[155px] border-y p-[16px] pr-[25px] flex mr-[20px] justify-between rounded-sm hover:bg-gray-100 cursor-pointer">
                <div className="w-[40px] h-[40px] bg-slate-400">
                    <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1647913589/team/87b7e197a57247ba2fa19b5a24ad16d5977b000bc0cd4ce2fa8652110a43e732.png"/>
                </div>

                <div className="w-[87%] h-[100%]">
                    <h3 className="font-[649] w-[100%] mr-[2px] flex"><span className="hover:text-blue-600 cursor-pointer"> PayPal Public API Workspace</span>
                    {/* <FaLink style={{color:"gray", marginTop:"6px", marginLeft:"1px"}} size={10}/> */}
                    </h3>
                    <p className="w-[100%] h-[60px] text-[13px] flex items-center">Postman workspace where PayPal maintains official Postman collection(s), Postman Flow(s) and environment(s)</p>
                    <div className="w-full flex mt-[15px]">
                    <div className="flex min-h-[27px] ">
                    <div className="flex  text-gray-700">
                        <PiSquaresFourLight size={21}/>
                        <p className="text-[13px] ml-[3px] mr-4">Workspace</p>
                    </div>
                    <div className="text-[13px] flex text-gray-700 mr-2 w-[75px]">By PayPal <img src="https://www.postman.com/_wp-assets/home/verified.589b3fcaf0e319fe48b2f6ff2c7fa665.svg" width="15px" style={{marginLeft:"5px", marginBottom:"5px"}}/></div>
                    
                </div>
                <div className="flex min-h-[26px] ">
                    <div className="flex text-gray-700 ">
                        <IoEyeOutline size={15} style={{marginTop:"3.5px", marginLeft:"2px"}} />
                        <p className="text-[13px] ml-[7px] mr-2">100+ watchers</p>
                    </div>
                    <div className="text-[13px] text-gray-700">100+ views</div>
                </div>
                    </div>
                    
                </div>
            </div>

            <div className="w-full h-[155px] border-y p-[16px] pr-[25px] flex mr-[20px] justify-between rounded-sm hover:bg-gray-100 cursor-pointer">
                <div className="w-[40px] h-[40px] bg-slate-400">
                    <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1/team/a4a37bd8b1df49b9d592fdb37e0058ace5dab756c1232c0846e39541f1e13c22"/>
                </div>

                <div className="w-[87%] h-[100%]">
                    <h3 className="font-[649] w-[100%] mr-[2px] flex"><span className="hover:text-blue-600 cursor-pointer"> PagerDuty API</span>
                    {/* <FaLink style={{color:"gray", marginTop:"6px", marginLeft:"1px"}} size={10}/> */}
                    </h3>
                    <p className="w-[100%] h-[60px] text-[13px] flex items-center"></p>
                    <div className="w-full flex mt-[15px]">
                    <div className="flex min-h-[27px] ">
                    <div className="flex  text-gray-700">
                        <AiOutlineDelete size={21}/>
                        <p className="text-[13px] ml-[3px] mr-4">Collection</p>
                    </div>
                    <div className="text-[13px] text-gray-700 mr-2">By PagerDuty</div>
                    <div className="flex  text-gray-700">
                        <IoGitNetworkOutline size={15}  style={{marginTop:"3.5px", marginLeft:"2px"}}/>
                        <p className="text-[13px] ml-[3px] mr-3">1k+ forks</p>
                    </div>
                </div>
                <div className="flex min-h-[26px] ">
                    <div className="flex text-gray-700 ">
                        <IoEyeOutline size={15} style={{marginTop:"3.5px", marginLeft:"2px"}} />
                        <p className="text-[13px] ml-[7px] mr-2">1k+ watchers</p>
                    </div>
                    <div className="text-[13px] text-gray-700">10k+ views</div>
                </div>
                    </div>
                    
                </div>
                
              </div>
                


              <div className="w-full h-[155px] border-y p-[16px] pr-[25px] flex mr-[20px] justify-between rounded-sm hover:bg-gray-100 cursor-pointer">
                <div className="w-[40px] h-[40px] bg-slate-400">
                    <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629873674/team/1ac862f7c8f1a3c91a17eb66e55f748d609f653c4d2bf43d9b12adef8568555c"/>
                </div>

                <div className="w-[87%] h-[100%]">
                    <h3 className="font-[649] w-[100%] mr-[2px] flex"><span className="hover:text-blue-600 cursor-pointer">Stripe Developers</span>
                    {/* <FaLink style={{color:"gray", marginTop:"6px", marginLeft:"1px"}} size={10}/> */}
                    </h3>
                    <p className="w-[100%] h-[60px] text-[13px] flex items-center">A workspace for the Stripe API </p>
                    <div className="w-full flex mt-[15px]">
                    <div className="flex min-h-[27px] ">
                    <div className="flex  text-gray-700">
                        <PiSquaresFourLight size={21}/>
                        <p className="text-[13px] ml-[3px] mr-4">Workspace</p>
                    </div>
                    <div className="text-[13px] text-gray-700 mr-2">By StripeDev</div>
                    
                </div>
                <div className="flex min-h-[26px] ">
                    <div className="flex text-gray-700 ">
                        <IoEyeOutline size={15} style={{marginTop:"3.5px", marginLeft:"2px"}} />
                        <p className="text-[13px] ml-[7px] mr-2">200+ watchers</p>
                    </div>
                    <div className="text-[13px] text-gray-700">100k+ views</div>
                </div>
                    </div>
                    
                </div>
                
              </div>

              <div className="w-full h-[155px] border-y p-[16px] pr-[25px] flex mr-[20px] justify-between rounded-sm hover:bg-gray-100 cursor-pointer">
                <div className="w-[40px] h-[40px] bg-slate-400">
                    <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629883554/team/85cdc0e29da8fbc2de10406ed758ffefe1cbb6dfaf7281ae60a0e17c36d90c8f"/>
                </div>

                <div className="w-[87%] h-[100%]">
                    <h3 className="font-[649] w-[100%] mr-[2px] flex"><span className="hover:text-blue-600 cursor-pointer">Adyen APIs</span>
                    {/* <FaLink style={{color:"gray", marginTop:"6px", marginLeft:"1px"}} size={10}/> */}
                    </h3>
                    <p className="w-[100%] h-[60px] text-[13px] flex items-center">All Adyen APIs with documentation, variables and examples  </p>
                    <div className="w-full flex mt-[15px]">
                    <div className="flex min-h-[27px] ">
                    <div className="flex  text-gray-700">
                        <PiSquaresFourLight size={21}/>
                        <p className="text-[13px] ml-[3px] mr-4">Workspace</p>
                    </div>
                    <div className="text-[13px] text-gray-700 mr-2">By Adyen Developers</div>
                    
                </div>
                <div className="flex min-h-[26px] ">
                    <div className="flex text-gray-700 ">
                        <IoEyeOutline size={15} style={{marginTop:"3.5px", marginLeft:"2px"}} />
                        <p className="text-[13px] ml-[7px] mr-2">50+ watchers</p>
                    </div>
                    <div className="text-[13px] text-gray-700">30k+ views</div>
                </div>
                    </div>
                    
                </div>
                
              </div>

              
              </div>

              <div className=' w-[49.7%] min-h-[90%]'>
              <div className='min-w-[100%] mb-[70.7px]'>
                <h1 className="font-semibold text-[18px] mb-[5px]  text-gray-900">New and Noteworthy</h1>
                <p className=" text-gray-500 text-[14px] items-center min-w-[100%]">Discover newly added public workspaces with pubic APIs from a multitude of industries <span className="text-blue-800 flex w-[30%] hover:underline mr-2 cursor-pointer m-none self-center"> View complete list  <FaArrowRightLong size={12} style={{color:"blue", marginTop:"5px", marginLeft:"5px"}} /> </span></p>
            </div>
            <div className="w-full h-[155px] border-y p-[16px] pr-[25px] flex mr-[20px] justify-between rounded-sm hover:bg-gray-100 cursor-pointer">
                <div className="w-[40px] h-[40px] bg-slate-400">
                    <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1694698173/team/244d1936086d86446ee0d0b95d4fd63a15cc1575e5bbcaef8f06c641ee96c994.png"/>
                </div>

                <div className="w-[87%] h-[100%]">
                    <h3 className="font-[649] w-[100%] mr-[2px] flex"><span className="hover:text-blue-600 cursor-pointer">Passage</span>
                    {/* <FaLink style={{color:"gray", marginTop:"6px", marginLeft:"1px"}} size={10}/> */}
                    </h3>
                    <p className="w-[100%] h-[60px] text-[13px] flex items-center">This workspace contains resources that you can demo and share with customers and partners.</p>
                    <div className="w-full flex mt-[15px]">
                    <div className="flex min-h-[27px] ">
                    
                    <div className="text-[13px] text-gray-700 mr-2">By passage-identity</div>
                    
                </div>
                <div className="flex min-h-[26px] ">
                    <div className="flex text-gray-700 ">
                        <IoEyeOutline size={15} style={{marginTop:"3.5px", marginLeft:"2px"}} />
                        <p className="text-[13px] ml-[7px] mr-2">4 watchers</p>
                    </div>
                    <div className="text-[13px] text-gray-700">500+ views</div>
                </div>
                    </div>
                    
                </div>
                
              </div>

              <div className="w-full h-[155px] border-y p-[16px] pr-[25px] flex mr-[20px] justify-between rounded-sm hover:bg-gray-100 cursor-pointer">
                <div className="w-[40px] h-[40px] bg-slate-400">
                    <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1693932167/team/c7db102bf1c62b050cae0665a0317bd6a8ecdc93d58124c492d17b54a7c16267.png"/>
                </div>

                <div className="w-[87%] h-[100%]">
                    <h3 className="font-[649] w-[100%] mr-[2px] flex"><span className="hover:text-blue-600 cursor-pointer"> ApyHub AI-enabled API</span>
                    {/* <FaLink style={{color:"gray", marginTop:"6px", marginLeft:"1px"}} size={10}/> */}
                    </h3>
                    <p className="w-[100%] h-[60px] text-[13px] flex items-center">This workspacecontains resources that you can demo and share with customers and partners.</p>
                    <div className="w-full flex mt-[15px]">
                    <div className="flex min-h-[27px] ">
                    
                    <div className="text-[13px] flex text-gray-700 mr-2 w-[75px]">By ApyHub</div>
                    
                </div>
                <div className="flex min-h-[26px] ">
                    <div className="flex text-gray-700 ">
                        <IoEyeOutline size={15} style={{marginTop:"3.5px", marginLeft:"2px"}} />
                        <p className="text-[13px] ml-[7px] mr-2">10+ watchers</p>
                    </div>
                    <div className="text-[13px] text-gray-700">1k+ views</div>
                </div>
                    </div>
                    
                </div>
            </div>

            <div className="w-full h-[155px] border-y p-[16px] pr-[25px] flex mr-[20px] justify-between rounded-sm hover:bg-gray-100 cursor-pointer">
                <div className="w-[40px] h-[40px] bg-slate-400">
                    <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1688401686/team/593a44605ca6711b6da72a8226e02689cf6b3cf7f6b060b99b6a34c0cbc07654.png"/>
                </div>

                <div className="w-[87%] h-[100%]">
                    <h3 className="font-[649] w-[100%] mr-[2px] flex"><span className="hover:text-blue-600 cursor-pointer"> Public Carbon Black Workspace</span>
                    {/* <FaLink style={{color:"gray", marginTop:"6px", marginLeft:"1px"}} size={10}/> */}
                    </h3>
                    <p className="w-[100%] h-[60px] text-[13px] flex items-center">
                      The collection here has the API requests for Carbon Black products and examples for the most popular endpoints
                    </p>
                    <div className="w-full flex mt-[15px]">
                    <div className="flex min-h-[27px] ">
                    
                    <div className="text-[13px] text-gray-700 mr-2">By VMWare Carbon Black</div>
                    
                </div>
                <div className="flex min-h-[26px] ">
                    <div className="flex text-gray-700 ">
                        <IoEyeOutline size={15} style={{marginTop:"3.5px", marginLeft:"2px"}} />
                        <p className="text-[13px] ml-[7px] mr-2">4 watchers</p>
                    </div>
                    <div className="text-[13px] text-gray-700">1k+ views</div>
                </div>
                    </div>
                    
                </div>
                
              </div>
                


              <div className="w-full h-[155px] border-y p-[16px] pr-[25px] flex mr-[20px] justify-between rounded-sm hover:bg-gray-100 cursor-pointer">
                <div className="w-[40px] h-[40px] bg-slate-400">
                    <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1685052251/team/8aa22ef6f0e83cc8be8300312a54d02deef77fefd19675920b623498ffbc3f26.png"/>
                </div>

                <div className="w-[87%] h-[100%]">
                    <h3 className="font-[649] w-[100%] mr-[2px] flex"><span className="hover:text-blue-600 cursor-pointer">Mastercard Developers</span>
                    {/* <FaLink style={{color:"gray", marginTop:"6px", marginLeft:"1px"}} size={10}/> */}
                    </h3>
                    <p className="w-[100%] h-[60px] text-[13px] flex items-center">A workspace for exploring the Mastercard APIs published on the Mastercard Developers platform </p>
                    <div className="w-full flex mt-[15px]">
                    <div className="flex min-h-[27px] ">
                    <div className="flex  text-gray-700">
                        <PiSquaresFourLight size={21}/>
                        <p className="text-[13px] ml-[3px] mr-4">Workspace</p>
                    </div>
                    <div className="text-[13px] text-gray-700 mr-2">By Mastercard</div>
                    
                </div>
                <div className="flex min-h-[26px] ">
                    <div className="flex text-gray-700 ">
                        <IoEyeOutline size={15} style={{marginTop:"3.5px", marginLeft:"2px"}} />
                        <p className="text-[13px] ml-[7px] mr-2">20+ watchers</p>
                    </div>
                    <div className="text-[13px] text-gray-700">10k+ views</div>
                </div>
                    </div>
                    
                </div>
                
              </div>

              <div className="w-full h-[155px] border-y p-[16px] pr-[25px] flex mr-[20px] justify-between rounded-sm hover:bg-gray-100 cursor-pointer">
                <div className="w-[40px] h-[40px] bg-slate-400">
                    <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1687779373/team/c21fad866324dbe62cbc161dc8d455775ffcad0c8352b3d8bcd17b42a347e166.png"/>
                </div>

                <div className="w-[87%] h-[100%]">
                    <h3 className="font-[649] w-[100%] mr-[2px] flex"><span className="hover:text-blue-600 cursor-pointer">Public API Workspace</span>
                    {/* <FaLink style={{color:"gray", marginTop:"6px", marginLeft:"1px"}} size={10}/> */}
                    </h3>
                    <p className="w-[100%] h-[60px] text-[13px] flex items-center">The Public API Workspace is an access point to all of Qualtrics' public APIs. It includes organized collections for all our public APIs</p>
                    <div className="w-full flex mt-[15px]">
                    <div className="flex min-h-[27px] ">
                    
                    <div className="text-[13px] text-gray-700 mr-2">By Qualtrics Public APIs</div>
                    
                </div>
                <div className="flex min-h-[26px] ">
                    <div className="flex text-gray-700 ">
                        <IoEyeOutline size={15} style={{marginTop:"3.5px", marginLeft:"2px"}} />
                        <p className="text-[13px] ml-[7px] mr-2">10+ watchers</p>
                    </div>
                    <div className="text-[13px] text-gray-700">3k+ views</div>
                </div>
                    </div>
                    
                </div>
                
              </div>

              
              </div>


            </div>
        </div>
    </div>
  )
}

export default Spotlight