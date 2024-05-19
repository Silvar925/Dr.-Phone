import { Outlet } from "react-router-dom"
import { Header } from "./widgets/Header/Header"
import { Footer } from "./widgets/Footer/Footer"

export const Layout = () => {
    let mobile = (innerWidth >= 320 && innerWidth <= 450)

    return (
        <div style={{
            height: innerWidth === 1920 ? 'auto' : '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: mobile === false ? 'hidden' : 'none'
        }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

