import styles from "./Header.module.css"
import { Сorners } from "../../shared/Сorners/Сorners"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

export const Header = () => {
    const location = useLocation().pathname
    const [isMenu, setIsMenu] = useState(false)

    return (
        <header>
            <Сorners style={{ height: '144px', width: '136px' }} img="interfaceIcons/menu.svg" />

            <div className={styles.logo}>
                <img src="dr.phone.svg" alt="dr.phone" />
                <h1>{dictionary[location]}</h1>
            </div>

            <div className={styles.right}>
                <img src="interfaceIcons/shop.svg" alt="shop" />
                <Сorners style={{ height: '163px', width: '118px' }} img="interfaceIcons/menuburger.svg"
                    onClick={() => setIsMenu(!isMenu)} />
            </div>

            {
                isMenu === true &&
                <ul className={styles.menu}>
                    <Link to="/">ГЛАВНАЯ</Link>
                    <Link to="/serivce">УСЛУГИ</Link>
                    <Link to="/map">КАРТА ЖЕ ЕСТЬ</Link>
                    <Link to="/products">ПРОДУКТЫ</Link>
                </ul>
            }


        </header>
    )
}


const dictionary = {
    '/serivce': 'УСЛУГИ И ТОВАРЫ',
    '/map': 'КАК НАС НАЙТИ',

    '/serivce/phones' : 'ТЕЛЕФОНЫ',
    '/serivce/allDevices' : 'ВСЕ УСТРОЙСТВА',
    '/serivce/accessories' : 'АКСЕССУАРЫ',
    '/serivce/deviceProtection' : 'ЗАЩИТА УСТРОЙСТВА',
    '/serivce/iMac' : 'iMAC',
    '/serivce/covers' : 'Чехлы',
}