const Footer = () => {
  return (
    <div className="w-full h-[80vh] mb-5 flex justify-center mt-10 items-center">
      <div className="w-[76.5%] grid grid-cols-6 gap-8  md:flex md:flex-col">
        <div className="col-span-2 text-[15px] ">
          <img
            className="text-gray-500 hover:text-orange-500"
            src="https://www.postman.com/_wp-assets/home/api-platform.328e169d93a240381150726a9f96f14b.svg"
            alt=""
            width="60%"
            height="80%"
            style={{ objectFit: "contain" }}
          />
          <p>© 2024 Postman, Inc.</p>
        </div>
        <div className="text-[14px] leading-8 w-[175px]  ">
          <h2 className="font-semibold text-[18px] text-gray-600 mb-3">
            Product
          </h2>
          <div className="flex flex-col w-[80%] justify-around">
            <p>What is Postman?</p>
            <p>API Repository</p>
            <p>Tools</p>
            <p>Governance</p>
            <p>Workspace</p>
            <p>Integrations</p>
            <p>Enterprise</p>
            <p>Plans and pricing</p>
            <p>Download the app</p>
            <p>Support center</p>
          </div>
        </div>
        <div className="text-[14px] leading-8 w-[175px] ">
          <h2 className="font-semibold text-[18px] text-gray-600 mb-3">
            Company
          </h2>
          <div className="flex flex-col w-[80%] justify-around">
            <p>About</p>
            <p>Careers and Culture</p>
            <p>Press & Media</p>
            <p>Contact Us</p>
            <p>Partner program</p>
          </div>
          <h2 className="font-semibold text-[18px] text-gray-600 mt-5 mb-3">
            Legal and Security
          </h2>
          <div className="flex flex-col w-[80%] justify-around">
            <p>Terms of Service</p>
            <p>Trust and Safety</p>
            <p>Privacy policy</p>
            <p>Cookie notice</p>
            <p>Privacy choices</p>
          </div>
        </div>
        <div className="text-[14px] leading-8 w-[175px]   ">
          <h2 className="font-semibold text-[18px] text-gray-600 mb-3">
            API Categories
          </h2>
          <div className="flex flex-col w-[80%] justify-around">
            <p>E-commerce</p>
            <p>eSignature</p>
            <p>Travel</p>
            <p>Database</p>
            <p>All Categories</p>
          </div>
          <h2 className="font-semibold text-[18px] text-gray-600 mt-5 mb-3">
            Explore public
          </h2>
          <div className="flex flex-col w-[80%] justify-around">
            <p>Collections</p>
            <p>Workspaces</p>
            <p>Teams</p>
          </div>
        </div>
        <div className="text-[14px] leading-8 w-[175px]  ">
          <h2 className="font-semibold text-[18px] text-gray-600 mb-3">
            Socials
          </h2>
          <div>
            <div className="flex ">
              <img
                src="https://www.postman.com/_wp-assets/home/twitter.18f1b06d5006bf390c3f5d0b75cc2a89.svg"
                loading="lazy"
              />
              <p className="ml-2">Twitter</p>
            </div>
            <div className="flex ">
              <img
                src="https://www.postman.com/_wp-assets/home/linkedin.06da5fb306e6b652bdc08b63a0f0d872.svg"
                loading="lazy"
              />
              <p className="ml-2">LinkedIn</p>
            </div>
            <div className="flex ">
              <img
                src="https://www.postman.com/_wp-assets/home/github.f317529ebb655e56dff29aac298c69cd.svg"
                loading="lazy"
              />
              <p className="ml-2">Github</p>
            </div>
            <div className="flex ">
              <img
                src="https://www.postman.com/_wp-assets/home/youtube.057630b0061e7eab9e8d2630ffe6704b.svg"
                loading="lazy"
                alt="label"
              />
              <p className="ml-2">Youtube</p>
            </div>
            <div className="flex ">
              <img
                src="https://www.postman.com/_wp-assets/home/twitch.6ba18ecc0b40f45f429929db0a925466.svg"
                loading="lazy"
              />
              <p className="ml-2">Twitch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
