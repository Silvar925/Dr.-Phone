import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./Layout"
import { Home } from "./Pages/Home/Home"
import { Service } from "./Pages/Service/Service"
import { Map } from "./Pages/Map/Map"
import { Products } from "./Pages/Products/Products"
import { Product } from "./Pages/Product/Product"
import { Basket } from "./Pages/Basket/Basket"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />

                    <Route path="/serivce" element={<Service />} >
                        <Route path=":products" element={<Products />} >
                            <Route path=":product" element={<Product />} />
                        </Route>
                    </Route>

                    <Route path="/map" element={<Map />} />
                    <Route path="/basket" element={<Basket />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}