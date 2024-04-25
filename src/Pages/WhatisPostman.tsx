import postman from "../assets/homepage-header-illustration.3385ecfa6f9284b1df99096f6ab456fe.svg";
import WhatPostman from "../Props/WhatPostman";

const WhatisPostman = () => {
  return (
    <div className="w-full h-[85vh] flex items-center justify-center bg-gray-50 mb-[100px]">
      <div className="w-[76.5%]  ">
        <div className="flex w-[100%] h-[317px] justify-between ">
          <div className="w-[50%] h-[115px] self-end ">
            <h1 className="font-semibold text-[26px] mb-[18px]">
              What is Postman?
            </h1>
            <p className=" text-gray-500 text-[15px]">
              Postman is an API platform for building and using APIs. Postman
              simplifies each step of the API lifecycle and streamlines
              collaboration so you can create better APIs—faster.
            </p>
          </div>
          <div className="w-[290px] h-[290px] z-index ">
            <img src={postman} />
          </div>
        </div>

        <div className="w-full min-h-[200px] flex my-[50px] justify-between ">
          <WhatPostman
            img="https://www.postman.com/_wp-assets/home/postman-home-settings.b9cefb8415ee1641f3f27d92a04e6bc8.svg"
            theme="API Tools"
            desc="A comprehensive set of tools that help accelerate the API Lifecycle - from design, testing, documentation and mocking to discovery."
          />

          <WhatPostman
            img="https://www.postman.com/_wp-assets/home/postman-home-decentralize.fc1fd75d2da063e25acc1b614f3900a3.svg"
            theme="API Repository"
            desc="Easily store, iterate and collaborate around all your API artifacts on one central platform used across teams"
          />

          <WhatPostman
            img="https://www.postman.com/_wp-assets/home/postman-home-grid-interface.a476805a0642565eebc97acf12840a72.svg"
            theme="Workspaces"
            desc="Organize your API work and collaborate with teammates across your organization or stakeholders across the world."
          />

          <WhatPostman
            img="https://www.postman.com/_wp-assets/home/postman-home-governance.fa6b9d1791442c3846f14f463bf6549b.svg"
            theme="Governance"
            desc="Improve the quality of APIs with governance rules that ensures APIs are designed, built, tested and distributed meeting organizational standards."
          />
        </div>

        <div className="w-[100%] h-[90px] flex justify-center">
          <div className="py-[5px] px-[12px] w-[110px] h-[35px] border rounded-sm hover:border-gray-400 hover:text-black transition-all duration-300">
            Learn more
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisPostman;
