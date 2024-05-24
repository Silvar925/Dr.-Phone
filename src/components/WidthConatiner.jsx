import { Outlet } from "react-router-dom"

export const WidthConatiner = () => {
    const mobile = (innerWidth >= 320 && innerWidth <= 450)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: mobile === true && '0px 20px'
        }}>
            <Outlet />
        </div>
    )
}