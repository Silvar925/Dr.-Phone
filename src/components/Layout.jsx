import { Outlet } from "react-router-dom"
import { Header } from "./widgets/Header/Header"
import { Footer } from "./widgets/Footer/Footer"

export const Layout = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}