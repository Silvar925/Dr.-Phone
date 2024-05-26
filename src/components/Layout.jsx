import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./widgets/Header/Header"
import { Footer } from "./widgets/Footer/Footer"

export const Layout = () => {
    const mobile = (innerWidth >= 320 && innerWidth <= 450)
    const location = useLocation().pathname

    return (
        <div className="layout" id="layout">
            <Header />
            <Outlet />
            <Footer />
        </div >
    )
}