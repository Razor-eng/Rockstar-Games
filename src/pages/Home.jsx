import { HiOutlineArrowSmRight } from "react-icons/hi"
import Featured from "../components/Home/Featured"
import HomeBanner from "../components/Home/HomeBanner"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="">
            <div className="h-fit pb-14 pt-5 bg-[#000000]">
                <HomeBanner />
            </div>
            <div className="h-fit px-10 pb-3">
                <Featured />
            </div>
            <Link to={'/games'} className="w-full flex justify-center text-zinc-400 font-semibold mt-14 text-lg pb-10">
                <button className="flex items-center w-fit hover:bg-[#FCAF17] border-b-4 border-[#FCAF17] hover:text-white px-3 py-2 rounded-sm transition-all duration-200 ease-in-out">
                    View All
                    <HiOutlineArrowSmRight size={18} />
                </button>
            </Link>
        </div>
    )
}

export default Home