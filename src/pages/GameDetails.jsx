import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { GameData } from "../constant/GameData";

const GameDetails = () => {
    const location = useLocation();
    const [gameName, setGameName] = useState();

    useEffect(() => {
        location && setGameName(location.pathname.split('/')[1].split('%20').join(" "));
    }, [location])

    return (
        <div className="min-h-screen w-full">
            {GameData.map((game, id) => gameName === game.name && (game.new ? (
                <div className="w-full pt-8" key={id}>
                    <div className="h-screen relative">
                        <img src={game.bg} alt="" className="h-[85%] w-full bg-blue-400" />
                        <div className="absolute top-0 flex flex-col gap-5 items-center justify-center h-[85%] w-[560px] bg-zinc-950 bg-opacity-65">
                            <div className="flex gap-4">
                                <img src={game.logo1} alt="" className={`${game.name !== 'Red Dead Redemption II' ? 'w-32' : 'w-60'}`} />
                            </div>
                            <div className="flex flex-col gap-3 mt-6 pl-20">
                                <div className="text-4xl font-bold text-white">Now available for PS5 and Xbox Series X|S</div>
                                <div className="text-xl font-normal text-zinc-300">Experience entertainment blockbusters, {game.name}.</div>
                            </div>
                            <div className="mt-6 flex gap-4">
                                <button className="border-2 border-white px-12 py-4 text-white text-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-sm">Watch The Trailer</button>
                                <button className="border-2 border-white px-12 py-4 text-white text-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-sm">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="h-screen relative" >
                        <img src={game.descBg} alt="" className="w-screen h-screen" />
                        <div className="absolute h-screen grid grid-cols-2 pr-36 top-28">
                            <img src={game.descImage} alt="" className="h-[80%]" />
                            <div className="flex flex-col gap-8">
                                <img src={game.logo1} alt="" className={`${game.name !== 'Red Dead Redemption II' ? 'w-32' : 'w-60'}`} />
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-4xl font-bold text-white">{game.descriptionHeading}</h2>
                                    <h2 className="text-lg text-white">{game.description}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <div className="border border-zinc-800 p-10 text-xl font-semibold text-white w-fit">
                            All latest feature upgrades and improvements available for Playstation 5 and Xbox Series X|S only.
                        </div>
                    </div>
                    <div className="mt-20 flex justify-center">
                        <div className="border border-zinc-800 p-5 text-xs text-white font-thin w-[270px] gap-5 flex items-center">
                            <img src="/rating.svg" alt="" className="h-full" />
                            <div className="flex flex-col">
                                <h2 className="border-b border-zinc-700 pb-2">Blood and Gore, Intense Violence, Mature Humor, Nudity, Strong Language, Strong Sexual Content, Use of Drugs and Alcohol</h2>
                                <h2 className="pt-1">In-Game Purchases, Users Interact</h2>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-3">
                    <div className="col-span-1 bg-[#000000] px-20 py-10">
                        <div className="flex flex-col gap-1 h-[650px]">
                            <h2 className="text-4xl font-bold text-white">{game.descriptionHeading}</h2>
                            <div className="flex justify-start text-zinc-400 font-semibold  mt-8 text-lg pb-10">
                                <button className="flex items-center w-fit hover:bg-[#FCAF17] border-b-4 border-[#FCAF17] hover:text-white px-3 py-2 rounded-sm transition-all duration-200 ease-in-out">
                                    Buy Now
                                </button>
                            </div>
                            <div className="mt-8">
                                <img src={game.descImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="px-20 py-10 text-white col-span-2">
                        <h2 className="text-2xl font-bold">Game Description</h2>
                        <p className="text-lg mt-12">
                            {game.description}
                        </p>
                    </div>
                </div>
            )))}
        </div >
    )
}

export default GameDetails