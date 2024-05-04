import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./Layout"
import { Home } from "./Pages/Home/Home"
import { Service } from "./Pages/Service/Service"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/serivce" element={<Service />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}