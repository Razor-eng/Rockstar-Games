import { useState } from "react";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    const NavbarItems = [
        { label: 'Home', icon: AiOutlineHome },
        { label: 'About', icon: AiOutlineInfoCircle },
        { label: 'Contact', icon: AiOutlineContacts }
    ]

    const [active, setActive] = useState(0);

    return (
        <div className="w-full px-4 flex justify-end items-center relative">
            <Link to={'/'}>
                <img
                    src="/rockstar.svg"
                    alt="logo"
                    className="w-8 left-10 top-5 absolute"
                />
            </Link>
            <div className="flex gap-10">
                {NavbarItems.map((item, id) => (
                    <div key={id} className={`${active === id ? 'border-b-2 border-yellow-400 text-zinc-100' : 'text-zinc-400'}`}>
                        <div className="rounded-md flex items-center text-lg font-semibold py-4 px-3 gap-2 cursor-pointer h-full w-full hover:bg-zinc-800 transition-all duration-150 ease-in-out" onClick={() => setActive(id)}>
                            <item.icon size={24} />
                            <h2 className="">{item.label}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar