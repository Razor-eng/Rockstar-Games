import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Games from "./pages/Games"
import Footer from "./components/Footer"
import GameDetails from "./pages/GameDetails"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen max-w-screen bg-[#0B0B0B]">
        <div className="w-full h-fit border-b bg-[#020202] border-zinc-800">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/:name" element={<GameDetails />} />
        </Routes>
        <div className="w-full h-fit bg-[#020202]">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
