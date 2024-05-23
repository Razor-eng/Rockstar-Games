import Banner from "../components/Game/Banner"
import GameCard from "../components/GameCard"
import { RockstarGames } from "../constant/RockstarGames"

const Games = () => {
    return (
        <div className="bg-[#0B0B0B] min-h-screen px-20">
            <Banner />
            <div className="grid grid-cols-3 gap-10 mt-8">
                {RockstarGames.map((game, id) => (
                    <GameCard key={id} game={game} />
                ))}
            </div>
        </div>
    )
}

export default Games