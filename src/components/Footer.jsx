import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitch, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="w-full p-16 mt-20 flex flex-col">
            <div className="w-full flex justify-between">
                <div className="text-white text-xl flex gap-6 p-2">
                    <h2 className="hover:text-[#FCAF17] cursor-pointer transition-all duration-200 ease-in-out">Contact</h2>
                    <h2 className="hover:text-[#FCAF17] cursor-pointer transition-all duration-200 ease-in-out">Careers</h2>
                    <h2 className="hover:text-[#FCAF17] cursor-pointer transition-all duration-200 ease-in-out">Community Guidelines</h2>
                    <h2 className="hover:text-[#FCAF17] cursor-pointer transition-all duration-200 ease-in-out">Subscribe</h2>
                </div>
                <div className="cursor-pointer text-white text-lg flex gap-1 items-center p-2">
                    <CiGlobe />
                    Select a Language
                    <IoIosArrowDown />
                </div>
            </div>
            <div className="w-full flex text-lg justify-between mt-16">
                <div className="text-zinc-500 flex gap-6 p-2">
                    <h2 className="hover:text-[#FCAF17] cursor-pointer transition-all duration-200 ease-in-out">Corporate</h2>
                    <h2 className="hover:text-[#FCAF17] cursor-pointer transition-all duration-200 ease-in-out">Privacy</h2>
                    <h2 className="hover:text-[#FCAF17] cursor-pointer transition-all duration-200 ease-in-out">Cookie Settings</h2>
                    <h2 className="hover:text-[#FCAF17] cursor-pointer transition-all duration-200 ease-in-out">Cookie Policy</h2>
                    <h2 className="hover:text-[#FCAF17] cursor-pointer transition-all duration-200 ease-in-out">Legal</h2>
                    <h2 className="hover:text-[#FCAF17] cursor-pointer transition-all duration-200 ease-in-out">DoNot Sell My Personal Information</h2>
                </div>
                <div className="cursor-pointer text-white text-xl flex gap-1 items-center">
                    <div className="p-3 hover:bg-[#262626] transition-all duration-200 ease-in-out rounded-full"><FaXTwitter /></div>
                    <div className="p-3 hover:bg-[#262626] transition-all duration-200 ease-in-out rounded-full"><FaInstagram /></div>
                    <div className="p-3 hover:bg-[#262626] transition-all duration-200 ease-in-out rounded-full"><FaYoutube /></div>
                    <div className="p-3 hover:bg-[#262626] transition-all duration-200 ease-in-out rounded-full"><FaFacebook /></div>
                    <div className="p-3 hover:bg-[#262626] transition-all duration-200 ease-in-out rounded-full"><FaTwitch /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer