// import logo from '../assets/postmanLogo.png'
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-[100%] flex justify-center bg-white">
      <div className="w-[98%] h-[50px] backdrop-blur-[1px] bg-white flex items-center justify-between ml-[15px] fixed ">
        <div className="h-[100%] w-[710px]  flex items-center justify-between">
          <Link to="/">
            <div className="w-[35px] h-[35px] bg-orange-500 rounded-full">
              <img
                src="https://cdn.worldvectorlogo.com/logos/postman.svg"
                alt="postman_logo"
              />
            </div>
          </Link>
          <div className="h-[100%] w-[655px]  flex items-center justify-between">
            <nav className="w-[70px] flex items-center justify-between cursor-pointer font-[620] hover:text-black transition-all duration-300 text-gray-600">
              Product{" "}
              <FaAngleDown
                size={14}
                style={{ marginTop: "4px", rotate: "180deg" }}
              />
            </nav>
            <Link to="/pricing">
              <nav className="cursor-pointer font-[620]  hover:text-black transition-all duration-300 text-gray-600">
                Pricing
              </nav>
            </Link>
            <nav className=" text-gray-600 font-[620] cursor-pointer  hover:text-black transition-all duration-300 ">
              Enterprise
            </nav>
            <nav className=" flex items-center justify-between cursor-pointer text-gray-600 font-[620] hover:text-black transition-all duration-300">
              Resources and Support{" "}
              <FaAngleDown
                size={14}
                style={{
                  marginTop: "4px",
                  marginLeft: "3px",
                  rotate: "180deg",
                }}
              />
            </nav>
            <nav className=" text-gray-600 font-[620] cursor-pointer hover:text-black transition-all duration-300">
              Public API Network
            </nav>
          </div>
        </div>

        <div className="w-[170px] h-[75%] bg-gray-100 border hover:border-gray-400 flex items-center justify-center rounded-md hover:text-black transition-all duration-300 cursor-pointer">
          <CiSearch size={14} style={{ marginRight: "4px" }} />
          <p className="text-[14px] ">Search Postman</p>
        </div>

        <div className=" flex h-[100%] w-[360px] items-center justify-between">
          <div className="py-[5px] px-[12px] border rounded-sm hover:border-gray-400 hover:text-black transition-all duration-300 cursor-pointer">
            Contact Sales
          </div>
          <div className="py-[5px] px-[12px] border rounded-sm hover:border-gray-400 hover:text-black transition-all duration-300 cursor-pointer">
            Sign In
          </div>
          <div className=" bg-orange-500 w-[140px] h-[50] p-[7.5px] border rounded-md flex justify-center text-white  text-[14px] font-[500] hover:bg-orange-600 cursor-pointer">
            Sign Up for Free
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
