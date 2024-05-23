import { RockstarGames } from "../../constant/RockstarGames"
import GameCard from "../GameCard"

const Featured = () => {
    return (
        <div className="mt-10 w-full">
            <h2 className="text-white font-bold text-3xl">
                Featured Games
            </h2>
            <div className="grid grid-cols-4 gap-8 mt-5">
                {RockstarGames.map((game, id) => id < 4 && (
                    <GameCard game={game} key={id} />
                ))}
            </div>
        </div>
    )
}

export default Featured