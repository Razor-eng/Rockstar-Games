import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const GameCard = ({ game }) => {
    const navigate = useNavigate();
    return (
        <div
            className="hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out relative group shadow-lg shadow-zinc-800"
            onClick={() => {
                navigate(`/${game.name}`)
            }}
        >
            <img
                src={game.image}
                alt=""
                className="rounded-xl"
            />
            <div className="absolute bottom-0 text-center w-full bg-zinc-900 bg-opacity-80 p-8 group-hover:opacity-100 opacity-0 transition-opacity duration-200 ease-in-out">
                <h2 className="text-white text-2xl font-semibold">{game.name}</h2>
            </div>
        </div>
    )
}

export default GameCard