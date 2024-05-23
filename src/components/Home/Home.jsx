import Featured from "./Featured"
import HomeBanner from "./HomeBanner"
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Home = () => {
    return (
        <div className="">
            <div className="h-fit pb-10 pt-5 bg-zinc-950">
                <HomeBanner />
            </div>
            <div className="h-fit px-10 py-3">
                <Featured />
            </div>
            <div className="w-full flex justify-center text-zinc-400 font-semibold mt-14 text-lg pb-10">
                <button className="flex items-center w-fit hover:bg-[#FCAF17] border-b-4 border-[#FCAF17] hover:text-white px-3 py-2 rounded-sm transition-all duration-200 ease-in-out">
                    View All
                    <HiOutlineArrowSmRight size={18} />
                </button>
            </div>
        </div>
    )
}

export default Home