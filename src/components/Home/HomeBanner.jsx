import { useState } from "react"

const HomeBanner = () => {
    const Games = [
        { name: 'Grand Theft Auto VI', desc: 'Trailer 1', image: '/games/GTA 6.jpg' },
        { name: 'Grand Theft Auto Online', desc: 'The Cluckin’ Bell Farm Raid', image: '/games/The Cluckin’ Bell Farm Raid.jpg' },
        { name: 'Grand Theft Auto Online', desc: 'The Chop Shop', image: '/games/The Chop Shop.jpg' },
        { name: 'Grand Theft Auto Online', desc: 'Speed to Victory in New Drag Races', image: '/games/Speed to Victory in New Drag Races.jpg' },
    ]
    const [gameId, setGameId] = useState(0);

    return (
        <>
            {Games.map((game, id) => id === gameId && (
                <div key={id} className="grid grid-cols-4">
                    <div className="col-span-3">
                        <img
                            src={game.image}
                            alt=""
                            className="w-full h-[80vh]"
                            loading="lazy"
                        />
                    </div>
                    <div className="text-zinc-100 my-6 p-10 flex flex-col justify-between">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl font-bold">
                                {game.name}
                            </h2>
                            <p className="text-xl font-semibold mt-10">{game.desc}</p>
                            <button className="uppercase px-16 py-4 text-lg font-semibold border-2 w-fit hover:bg-[#FCAF17] cursor-pointer hover:text-black transition-all duration-150 ease-in-out">
                                Watch Now
                            </button>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className={`${gameId === 0 ? 'border-white' : 'border-zinc-500'} border-2 cursor-pointer transition-all duration-200 ease-in-out`} onClick={() => setGameId(0)}></div>
                            <div className={`${gameId === 1 ? 'border-white' : 'border-zinc-500'} border-2 cursor-pointer transition-all duration-200 ease-in-out`} onClick={() => setGameId(1)}></div>
                            <div className={`${gameId === 2 ? 'border-white' : 'border-zinc-500'} border-2 cursor-pointer transition-all duration-200 ease-in-out`} onClick={() => setGameId(2)}></div>
                            <div className={`${gameId === 3 ? 'border-white' : 'border-zinc-500'} border-2 cursor-pointer transition-all duration-200 ease-in-out`} onClick={() => setGameId(3)}></div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default HomeBanner