const GetStarted = () => {
  return (
    <div className="w-full h-[45vh] flex justify-center items-center">
      <div className="bg-gray-50 w-[78vw] flex h-[40vh] p-5 justify-between rounded-lg py-[90px] px-7 ">
        <div className=" w-[49%] h-[100%] flex items-center justify-start">
          <div className="w-[73%] h-[60%]">
            <div className="font-semibold text-[26px] ">
              Get started with Postman
            </div>

            <div className="w-[93%] border border-orange-500 rounded-md flex my-[15px]">
              <input
                className="h-[100%] outline-blue-500  flex-1 rounded-tl-md rounded-bl-md pl-[10px] pt-[5px] pb-3 bg-transparent"
                placeholder="name@company.com"
              />
              <div className=" bg-orange-500 w-[120px] h-[50] p-[7px] rounded-br-md rounded-tr-md flex justify-center text-white text-[13.5px] items-center font-[500] hover:bg-orange-600">
                Sign Up for Free
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[50%] h-[50%] self-start">
          <img
            src="https://www.postman.com/_wp-assets/home/homepage-footer-illustration.d3da12776e6f2f03c589282053789222.svg"
            alt=""
            width="100%"
            height="80%"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
