import styles from "./Button.module.css"
import { Link } from "react-router-dom"

export const Button = ({ name, style, url, onClick, className }) => {
    if (onClick === undefined) {
        return (
            <Link to={url} className={`${styles.button} ${className}`} style={{ ...style }}>{name}</Link>
        )
    } else {
        return (
            <div onClick={onClick} className={styles.button} style={{ ...style }}>{name}</div>
        )
    }

}