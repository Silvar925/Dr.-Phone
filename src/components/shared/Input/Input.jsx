import styles from "./Input.module.css"

import shopIcon from "../../../assets/interfaceIcons/shop.svg"
import menuBurgerIcon from "../../../assets/interfaceIcons/menuburger.svg"
import { Link } from "react-router-dom"

export const Input = ({ className, onClick }) => {
    return (
        <div className={`${styles.input} ${className}`} onClick={onClick}>
            <div className={styles.button}>
                <img src={menuBurgerIcon} alt="menu" />
            </div>

            <input type="text" />

            <Link to = "/basket" className={styles.button}>
                <img src={shopIcon} alt="shop" />
            </Link>
        </div>
    )
}