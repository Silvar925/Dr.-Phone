import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./Layout"
import { Home } from "./Pages/Home/Home"
import { Service } from "./Pages/Service/Service"
import { Map } from "./Pages/Map/Map"
import { Products } from "./Pages/Products/Products"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/serivce" element={<Service />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/products" element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}