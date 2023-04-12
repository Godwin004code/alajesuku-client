
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import "./index.css"

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App