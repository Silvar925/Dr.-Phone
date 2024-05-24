import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./widgets/Header/Header"
import { Footer } from "./widgets/Footer/Footer"

export const Layout = () => {
    const mobile = (innerWidth >= 320 && innerWidth <= 450)
    const location = useLocation().pathname

    return (
        <div className="layout">
            <Header />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: location === '/map' ? 'auto' : 'center',
            }}>
            </div>
                <Outlet />
            <Footer />
        </div >
    )
}