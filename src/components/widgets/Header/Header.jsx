import styles from "./Header.module.css"
import { Сorners } from "../../shared/Сorners/Сorners"
import { Input } from "../../shared/Input/Input"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

import { removeUntilFirstSlash } from "../../helpers"

import menuIcon from "../../../assets/interfaceIcons/menu.svg"
import menuBurgerIcon from "../../../assets/interfaceIcons/menuburger.svg"
import logoIcon from "../../../assets/dr.phone.svg"
import shopIcon from "../../../assets/interfaceIcons/shop.svg"

export const Header = () => {
    const location = useLocation().pathname
    const [isMenu, setIsMenu] = useState(false)
    const [click, setClick] = useState(false)
    const menu = useRef(null)

    useEffect(() => {
        if (location === '/serivce') {
            setClick(true);
        } else {
            setClick(false);
        }
    }, [location]);


    const clickHandle = () => {
        setIsMenu(!isMenu)
        if (menu.current !== null) {
            menu.current.style.transition = "opacity 1s";
            menu.current.style.opacity = click ? 0 : 1;
        }
    }

    const hideMenu = () => {
        setIsMenu(false)
    }

    let mobile = (window.innerWidth >= 320 && window.innerWidth <= 435)
    let url = removeUntilFirstSlash(location)

    const displayLogo = () => {
        let keys = Object.keys(dictionary)

        for (let key of keys) {
            if (url === key || mobile === false) {
                return true
            } else {
                return false
            }
        }
    }

    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (menu.current && !menu.current.contains(event.target)) {
                hideMenu()
            }
        };

        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);



    return (
        <header>
            <Link to={!click ? '/serivce' : '/'} className={styles.corners}>
                <Сorners onClick={() => setClick(!click)}
                    style={{
                        height: '144px', width: '136px', borderRadius: '0px 0px 127px 0px'
                    }} img={menuIcon}
                />
            </Link>

            <div className={styles.logo}>

                {mobile === true && <Input className={styles.input}
                    onClick={() => clickHandle()}
                />}

                {
                    displayLogo() === true &&
                    <Link to="/">
                        <img src={logoIcon} alt="dr.phone" />
                    </Link>
                }

                <h1>{dictionary[location]}</h1>
            </div>

            <div className={styles.right}>
                <Link to="/basket" className={styles.basket}>
                    <img src={shopIcon} alt="shop" />
                </Link>

                <Сorners
                    style={{ height: '170px', width: '136px', borderRadius: '0px 0px 0px 127px' }}
                    img={menuBurgerIcon}
                    onClick={() => clickHandle()} className={styles.corners} />
            </div>

            {
                isMenu === true &&
                <ul className={styles.menu} ref={menu}>
                    <li><Link to="/serivce/phones" onClick={hideMenu}>ТЕЛЕФОНЫ</Link></li>
                    <li><Link to="/serivce/phones" onClick={hideMenu}>АКСЕССУАРЫ</Link></li>
                    <li><Link to="/serivce/phones" onClick={hideMenu}>БУ УСТРОЙСТВА</Link></li>
                    <li><Link to="/serivce/phones" onClick={hideMenu}>РЕМОНТ</Link></li>
                    <li><Link to="/serivce/phones" onClick={hideMenu}>ЗАЩИТА УСТРОЙСТВА 360</Link></li>
                    <li><Link to="/serivce/phones" onClick={hideMenu}>ЧЕХЛЫ</Link></li>
                    <li><Link to="/serivce/phones" onClick={hideMenu}>I MAC</Link></li>
                    <li><Link to="/map" onClick={hideMenu}>Карта</Link></li>
                </ul>
            }
        </header >
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