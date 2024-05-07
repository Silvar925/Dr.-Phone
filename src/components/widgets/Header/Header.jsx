import styles from "./Header.module.css"
import { Сorners } from "../../shared/Сorners/Сorners"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

import menuIcon from "../../../assets/interfaceIcons/menu.svg"
import menuBurgerIcon from "../../../assets/interfaceIcons/menuburger.svg"
import logoIcon from "../../../assets/dr.phone.svg"
import shopIcon from "../../../assets/interfaceIcons/shop.svg"

export const Header = () => {
    const location = useLocation().pathname
    const [isMenu, setIsMenu] = useState(false)
    const [click, setClick] = useState(false)

    useEffect(() => {
        if (location === '/serivce') {
            setClick(true);
        } else {
            setClick(false);
        }
    }, [location]);


    const menu = useRef(null)

    const clickHandle = () => {
        setIsMenu(!isMenu)
        if (menu.current !== null) {
            menu.current.style.transition = "opacity 1s";
            menu.current.style.opacity = click ? 0 : 1;
        }
    }

    return (
        <header>
            <Link to={!click ? '/serivce' : '/'}>
                <Сorners onClick={() => setClick(!click)}
                    style={{
                        height: '144px', width: '136px', borderRadius: '0px 0px 127px 0px'
                    }} img={menuIcon} />
            </Link>


            <div className={styles.logo}>
                <Link to="/">
                    <img src={logoIcon} alt="dr.phone" />
                </Link>
                <h1>{dictionary[location]}</h1>
            </div>

            <div className={styles.right}>
                <Link to="/basket" className={styles.basket}>
                    <img src={shopIcon} alt="shop" />
                </Link>

                <Сorners
                    style={{ height: '170px', width: '136px', borderRadius: '0px 0px 0px 127px' }}
                    img={menuBurgerIcon}
                    onClick={() => clickHandle()} />
            </div>

            {
                isMenu === true &&
                <ul className={styles.menu} ref={menu}>
                    <Link to="/serivce/phones">ТЕЛЕФОНЫ</Link>
                    <Link to="/serivce/phones">АКСЕССУАРЫ</Link>
                    <Link to="/serivce/phones">БУ УСТРОЙСТВА</Link>
                    <Link to="/serivce/phones">РЕМОНТ</Link>
                    <Link to="/serivce/phones">ЗАЩИТА УСТРОЙСТВА 360</Link>
                    <Link to="/serivce/phones">ЧЕХЛЫ</Link>
                    <Link to="/serivce/phones">I MAC</Link>
                </ul>
            }
        </header>
    )
}


const dictionary = {
    '/serivce': 'УСЛУГИ И ТОВАРЫ',
    '/map': 'КАК НАС НАЙТИ',

    '/serivce/phones': 'ТЕЛЕФОНЫ',
    '/serivce/allDevices': 'ВСЕ УСТРОЙСТВА',
    '/serivce/accessories': 'АКСЕССУАРЫ',
    '/serivce/deviceProtection': 'ЗАЩИТА УСТРОЙСТВА',
    '/serivce/iMac': 'iMAC',
    '/serivce/covers': 'Чехлы',
}