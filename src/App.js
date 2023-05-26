
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import "./index.css"
import ContactPage from "./components/Contact/ContactPage"

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App