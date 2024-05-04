import styles from "./Header.module.css"
import { Сorners } from "../../shared/Сorners/Сorners"
import { useLocation } from "react-router-dom"

export const Header = () => {
    const location = useLocation().pathname

    return (
        <header>
            <Сorners style={{ height: '144px', width: '136px' }} img="interfaceIcons/menu.svg" />

            <div className={styles.logo}>
                <img src="dr.phone.svg" alt="dr.phone" />
                <h1>{dictionary[location]}</h1>
            </div>

            <div className={styles.right}>
                <img src="interfaceIcons/shop.svg" alt="shop" />
                <Сorners style={{ height: '163px', width: '118px' }} img="interfaceIcons/menuburger.svg" />
            </div>
        </header>
    )
}


const dictionary = {
    '/serivce': 'УСЛУГИ И ТОВАРЫ'
}