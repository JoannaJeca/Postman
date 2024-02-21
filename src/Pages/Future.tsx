
const Future = () => {
  return (
    <div className="mt-20 w-full h-[45vh] mb-[90px] flex items-center justify-center bg-gray-50 ">
        <div className="w-[76.5%] flex h-[100%]  items-center justify-between ">
        <div className="w-[55%] h-[115px] self-center ">
                <h1  className="font-semibold text-[26px] mb-[12px]">The future is API-first</h1>
                <p className=" text-gray-700 text-[13.5px]">
At Postman, we believe the future will be built with APIs. The API —first World graphic novel tells the story of how and why the API-first world is coming to be.</p>
        <div className="py-[5px] px-[12px] border rounded-sm hover:border-gray-400 hover:text-black transition-all duration-300 mt-[10px] w-[163px] text-[12.5px] text-gray-500">Read the Graphic Novel</div>
            </div> 
            <div className="w-[36%] h-[65%] self-end">
                <img src="https://voyager.postman.com/photo/api-first-world-book-postman.png"/>
            </div>
        </div>
    </div>
  )
}

export default Future